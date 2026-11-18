/* eslint-disable no-console */
// Build-time static rendering. Runs after `react-scripts build`.
//
// For every route in src/content/site.js (plus each /learn article) this renders
// the real React app to HTML and writes build/<route>/index.html, so search
// engines, AI crawlers and link previews get the full page content, title,
// description, canonical URL and structured data without running JavaScript.
// The browser then hydrates that HTML (see src/index.js).
//
// It also writes build/404.html and build/sitemap.xml.

const fs = require('fs');
const path = require('path');
const Module = require('module');

// babel-preset-react-app's "test" env compiles for the running Node with CommonJS
// output and the dev JSX runtime, so React must load its development build too.
// The rendered HTML is the same either way.
process.env.NODE_ENV = 'test';
process.env.BABEL_ENV = 'test';

const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'src');
const BUILD = path.join(ROOT, 'build');

// Compile src/ with the same Babel preset CRA uses, and ignore style/asset imports.
const babel = require('@babel/core');
const baseJs = Module._extensions['.js'];
Module._extensions['.js'] = function compile(module, filename) {
  if (!filename.startsWith(SRC)) return baseJs(module, filename);
  const { code } = babel.transformFileSync(filename, {
    babelrc: false,
    configFile: false,
    presets: [[require.resolve('babel-preset-react-app'), { runtime: 'automatic' }]],
  });
  return module._compile(code, filename);
};
for (const ext of ['.css', '.svg', '.png', '.jpg', '.jpeg', '.gif', '.webp', '.mp3']) {
  Module._extensions[ext] = () => {};
}

const React = require('react');
const { renderToString } = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
const App = require(path.join(SRC, 'App')).default;
const { ROUTES, SITE } = require(path.join(SRC, 'content/site'));
const articles = require(path.join(SRC, 'content/articles')).default;
const { ACCESSORIES } = require(path.join(SRC, 'content/site'));

const samples = ACCESSORIES.filter((a) => a.sample).map((a) => a.id);
if (samples.length) {
  const msg = `prerender: sample accessories still in src/content/site.js: ${samples.join(', ')}`;
  if (process.env.VERCEL) throw new Error(`${msg}. Replace them before deploying.`);
  console.warn(`WARNING: ${msg} (allowed locally, blocked on Vercel)`);
}

const template = fs.readFileSync(path.join(BUILD, 'index.html'), 'utf8');
if (!template.includes('<div id="root"></div>')) {
  throw new Error('prerender: build/index.html has no empty <div id="root"></div> to fill');
}

// React 19 emits hoistable tags (<title>, <meta>, <link>) at the start of the
// output when rendering a fragment. Move them into <head>.
const HOISTABLE = /^(?:<title>[\s\S]*?<\/title>|<meta\b[^>]*\/?>|<link\b[^>]*\/?>)/;
function splitHead(html) {
  const head = [];
  let rest = html;
  for (let m = rest.match(HOISTABLE); m; m = rest.match(HOISTABLE)) {
    head.push(m[0].replace(/^<(title|meta|link)\b/, '<$1 data-prerendered=""'));
    rest = rest.slice(m[0].length);
  }
  return { head: head.join(''), body: rest };
}

function renderRoute(route) {
  const html = renderToString(
    React.createElement(StaticRouter, { location: route }, React.createElement(App))
  );
  const { head, body } = splitHead(html);
  if (!/<title/.test(head)) throw new Error(`prerender: no <title> rendered for ${route}`);
  // Function replacers, so "$&", "$'" etc. in page content are inserted literally.
  return template
    .replace('</head>', () => `${head}</head>`)
    .replace('<div id="root"></div>', () => `<div id="root" data-route="${route}">${body}</div>`);
}

function write(file, contents) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, contents);
}

const routes = [...ROUTES, ...articles.map((a) => `/learn/${a.slug}`)];

for (const route of routes) {
  const out = route === '/' ? path.join(BUILD, 'index.html') : path.join(BUILD, route.slice(1), 'index.html');
  write(out, renderRoute(route));
  console.log(`prerendered ${route}`);
}

write(path.join(BUILD, '404.html'), renderRoute('/404'));
console.log('prerendered 404.html');

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...routes.map((r) => `  <url><loc>${SITE.url}${r === '/' ? '/' : r}</loc></url>`),
  '</urlset>',
  '',
].join('\n');
write(path.join(BUILD, 'sitemap.xml'), sitemap);
console.log(`wrote sitemap.xml (${routes.length} URLs)`);
