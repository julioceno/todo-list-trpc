import express from 'express';
import cors from 'cors';
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from '../routes';

const app = express();

app.use(cors());

app.use(
  '/todo-list',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
  })
);

app.listen(4000);
