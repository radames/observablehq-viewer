import { html, renderToString } from '@popeindustries/lit-html-server';
import render from '../render';

addEventListener('fetch', (event) => {
  event.respondWith(handleRoute(event.request));
});

// 2. Return a custom request object
async function handleRoute(request) {
  //   const markup = await renderToString(html` <h1>Hello ${name}!</h1> `);

  const out = await processRoute(request);
  return new Response(out, {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  });
}

function processRoute(request) {
  const url = new URL(request.url);

  const cellsNames = url.searchParams.get('cells')
    ? url.searchParams.get('cells').split(',')
    : null;
  const fullWidth = url.searchParams.get('fullwidth')
    ? !!parseInt(url.searchParams.get('fullwidth'))
    : false;
  const [root, user, project] = url.pathname.split('/');

  const out = render(html, user, project, cellsNames, fullWidth);
  return renderToString(out);
}
