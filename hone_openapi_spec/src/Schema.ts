import { z } from '@hono/zod-openapi'


//input schema
export const ParamsSchema = z.object({
  id: z
    .string()
    .min(3)
    .openapi({
      param: {
        name: 'id',
        in: 'path',
      },
      example: '1212121',
    }),
})


// export const paramSchema_1=z.object({
//     id:z.string().min(3).openapi({
//         param:{
//             name:'id',
//             in:'path'
//         },
//         example:'12323'
//     })
// })

//output schema
export const UserSchema = z
  .object({
    id: z.string().openapi({
      example: '123',
    }),
    name: z.string().openapi({
      example: 'John Doe',
    }),
    age: z.number().openapi({
      example: 42,
    }),
  })
  .openapi('User')