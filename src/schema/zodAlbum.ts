import { z } from "zod"

export const CreateAlbumSchema = z.object({
  albumName: z
    .string({
      required_error: "You Should Provide a name to Ur Album",
    })
    .max(40, { message: "You Should shorten the album name" })
    .min(8, {
      message: "You Should extend the album name",
    }),
  albumDesc: z
    .string({
      required_error: "you should provide a description ",
    })
    .max(40, { message: "You Should shorten the description of the album" })
    .min(10, {
      message: "You Should extend the description of the album",
    }),
})
export const AddAlbumSchema = z.object({
  albums: z.object({
    _id: z.string(),
    albumName: z.string(),
  }),
})

export type CreateAlbumT = z.infer<typeof CreateAlbumSchema>
export type AddAlbumT = z.infer<typeof AddAlbumSchema>
