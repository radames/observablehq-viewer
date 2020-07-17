require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');
const marked = require('marked');
const { html, renderToStream } = require('@popeindustries/lit-html-server');
const render = require('./render');

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
  const fullWidth = req.query.fullwidth
    ? !!parseInt(req.query.fullwidth)
    : false;
  const { user, project } = req.params;
  const cellsHtml = cellsNames
    ? cellsNames.map(
        (name) =>
          html` <div class="observablehq-${name.replace(/\s/g, '-')}"></div> `
      )
    : '';

  const out = render(html, user, project, cellsNames, fullWidth);

  try {
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
