import express from 'express';
import { expressMiddleware } from '@apollo/server/express4';
import http from 'http';
import cors from 'cors';
import helmet from 'helmet';

import config from '../utils/config';
import log from '../utils/log';

const app = express();
const httpServer = http.createServer(app);

import { server } from './apollo';

const setupApp = async () => {
  
  // Start apollo server
  await server.start();
  log.init({ label: 'Apollo', message: 'Apollo server running' });

  // Setup /graphql endpoint
  app.use(
    '/graphql',
    cors<cors.CorsRequest>({ origin: config.APP_REQUEST_ORIGINS.split(',') }),
    express.json(),
    helmet(),
    expressMiddleware(server),
  );

  // HTTP Server listen
  const port = +config.APP_PORT || 4000;
  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));
  log.init({ label: 'App', message: `Server running on port ${port}` });
}

export { app, httpServer, setupApp };
