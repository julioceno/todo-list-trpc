import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '../../../api/routes';

export const trpc = createTRPCReact<AppRouter>();
