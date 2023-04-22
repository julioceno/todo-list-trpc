import { z } from 'zod';

const schema = z.object({
  title: z.string({
    required_error: 'Título obrigatório',
  }),
  description: z.string({
    required_error: 'Descrição obrigatória',
  }),
});

export { schema };
