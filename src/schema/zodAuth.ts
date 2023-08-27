import { z } from "zod"

export const SiginInSchema = z.object({
  username: z.string().max(20, {
    message: "your name should be less than (20ch)",
  }),
  email: z.string().email({
    message: "the Email is required",
  }),
  password: z
    .string()
    .max(20, {
      message: "password must be shorter!",
    })
    .min(10, {
      message: "password must be longer!",
    }),
})

export type SiginT = z.infer<typeof SiginInSchema>

export const LoginSchemaZod = z.object({
  email: z.string().email({
    message: "the Email is required",
  }),
  password: z
    .string()
    .max(20, {
      message: "password must be shorter!",
    })
    .min(10, {
      message: "password must be longer!",
    }),
})

export type LoginT = z.infer<typeof LoginSchemaZod>
