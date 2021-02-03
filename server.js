const express = require('express');
const next = require('next');
const nextI18NextMiddleware = require('next-i18next/middleware');

const nextI18next = require('./i18n');

const port = 3000;
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(nextI18NextMiddleware(nextI18next));

  server.get('/enterprise', (req, res) => {
    return app.render(req, res, '/renderedByExpress');
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) {
      throw err;
    } else {
      // eslint-disable-next-line no-console
      console.log(`Ready on http://localhost:${port}`);
    }
  });
});
