import * as trpcExpress from '@trpc/server/adapters/express';
import express from 'express';
import { expressHandler } from 'trpc-playground/handlers/express';

import router from './router';

const port = process.env.PORT || 3333;
const apiEndpoint = "/trpc";
const playgroundEndpoint = "/playground";

const runApp = async () => {
  const app = express();
  app.use(express.json());

  app.use(
    apiEndpoint,
    trpcExpress.createExpressMiddleware({
      router,
    })
  );

  app.use(
    playgroundEndpoint,
    await expressHandler({
      trpcApiEndpoint: apiEndpoint,
      playgroundEndpoint,
      router,
    })
  );

  app.listen(port, () => console.log("deu certo!"));
};

runApp();
