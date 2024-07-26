import { createRoute } from '@hono/zod-openapi'
import { ParamsSchema, UserSchema } from './Schema'

export const route = createRoute({
  method: 'get',
  path: '/users/{id}',
  request: {
    params: ParamsSchema, //providing the input schema
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: UserSchema,  //providing the output schema
        },
      },
      description: 'Retrieve the user',
    },
  },
})