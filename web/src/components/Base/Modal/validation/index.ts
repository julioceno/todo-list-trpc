import { z } from 'zod';

export const schema = z.object({
  title: z.string({
    required_error: 'Título obrigatório',
  }),
  description: z.string({
    required_error: 'Descrição obrigatória',
  }),
});

export type FormTaskInput = z.TypeOf<typeof schema>;
