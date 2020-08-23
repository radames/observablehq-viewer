function render(html, user, project, cellsNames, fullWidth) {
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
        : `runtime.module(define, name => ${JSON.stringify(
            cellsNames
          )}.includes(name) && Inspector.into(".wrapper .observablehq-" + name.replace(/\\s/g, '-'))());`};
    </script>
  `;

  const out = html`
    <!DOCTYPE html>
    <html>
      <head>
        <title>NOTEBOOK TITLE</title>

        <link
          rel="stylesheet"
          href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css"
        />
        <link href="https://cdn.jsdelivr.net/gh/radames/observablehq-viewer@main/public/source-serif-pro/source-serif-pro.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/gh/radames/observablehq-viewer@main/public/styles.css" rel="stylesheet" />
      </head>
      <body>
        <main class="${!fullWidth ? 'mw8' : ''} center wrapper">
          ${cellsHtml}
        </main>
        ${script}
      </body>
    </html>
  `;

  return out;
}

module.exports = render;