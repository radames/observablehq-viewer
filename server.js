const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');
const marked = require('marked');
const { html, renderToStream } = require('@popeindustries/lit-html-server');

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.static('public'));

app.get('/:user/:project', (req, res, next) => {
  const cellsNames = req.query.cells ? req.query.cells.split(',') : null;
  console.log(req.query.cells);
  const { user, project } = req.params;
  const cellsHtml = cellsNames
    ? cellsNames.map(
        (name) =>
          html` <div class="observablehq-${name.replace(/\s/g, '-')}"></div> `
      )
    : '';

  const script = html`
    <script type="module">
      import {
        Runtime,
        Inspector,
        Library,
      } from 'https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js';
      import define from 'https://api.observablehq.com/${user}/${project}.js?v=3';

      const library = new Library();
      const wrapper = document.querySelector('.wrapper');
      function customWidth() {
        return library.Generators.observe(function (change) {
          let width = change(wrapper.clientWidth);
          function resized() {
            let w = wrapper.clientWidth;
            if (w !== width) change((width = w));
          }
          window.addEventListener('resize', resized);
          return function () {
            window.removeEventListener('resize', resized);
          };
        });
      }
      library.width = customWidth;
      const runtime = new Runtime(library);
      ${!cellsNames
        ? `runtime.module(define, Inspector.into('.wrapper'));`
        : `runtime.module(define, name => {

   ${cellsNames
     .map(
       (name) =>
         `if (name === '${name}') return Inspector.into(".wrapper .observablehq-${name.replace(
           /\s/g,
           '-'
         )}")();`
     )
     .join('\n')}
  });`};
    </script>
  `;

  try {
    const out = html`
      <!DOCTYPE html>
      <html>
        <head>
          <title>NOTEBOOK TITLE</title>

          <link
            rel="stylesheet"
            href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css"
          />
          <link
            href="/source-serif-pro/source-serif-pro.css"
            rel="stylesheet"
          />
          <link href="/styles.css" rel="stylesheet" />
        </head>
        <body>
          <main class="mw8 center wrapper">
            ${cellsHtml}
          </main>
          ${script}
        </body>
      </html>
    `;
    res.setHeader('content-type', 'text/html; charset=utf-8');
    renderToStream(out).pipe(res);
  } catch (err) {
    console.warn('ERROR', err);
    next(err);
    return;
  }
});

// README to HTML
const showReadme = (res) => {
  fs.readFile('./README.md', 'utf8', (err, text) => {
    if (err) {
      res.writeHead(500);
      return res.end();
    }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write(`
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/kognise/water.css@latest/dist/light.min.css">
${marked(text)}`);
    res.end();
  });
};
app.get('/', (req, res) => {
  showReadme(res);
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
