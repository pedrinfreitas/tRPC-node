import * as trpc from '@trpc/server';
import { z } from 'zod';

const mockResolve = [
  { id: 1, name: "Pedro" },
  { id: 2, name: "Antonio" },
  { id: 3, name: "Paula" },
];

export default trpc
  .router()
  .query("getUsers", {
    output: z.array(
      z.object({
        id: z.number(),
        name: z.string(),
      })
    ),
    resolve: () => mockResolve,
  })
  .query("getUser", {
    input: z.object({
      id: z.number(),
    }),
    resolve(request) {
      const inputId = request.input.id;

      return {
        id: inputId,
        name: mockResolve[inputId - 1]?.name,
      };
    },
  });
