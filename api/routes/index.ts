import { initTRPC } from '@trpc/server';
import { z } from 'zod';

export const t = initTRPC.create();

const schema = z.object({
  title: z.string(),
  description: z.string(),
});

type SchemaInput = z.infer<typeof schema>;

const tasks: SchemaInput[] = [];

export const appRouter = t.router({
  getTasks: t.procedure.query(() => {
    return tasks;
  }),
  createTask: t.procedure.input(schema).mutation((req) => {
    tasks.push(req.input);
  }),
});

export type AppRouter = typeof appRouter;
