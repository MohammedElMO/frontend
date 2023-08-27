import { zodResolver } from "@hookform/resolvers/zod"
import { CreateAlbumT, CreateAlbumSchema } from "../../schema/zodAlbum"
import Input from "../layout/common/Input"
import { SubmitHandler, useForm } from "react-hook-form"
import Button from "../layout/common/Button"
import { ImgData } from "../gallery/ImageCard"
import { useEffect } from "react"
import useCreateAlbum from "../../hooks/mutation/useCreateAlbum"
import { getAlbumImages } from "../../utils/getAlbumImages"

function CreateAlbum({
  photo,
  setIsOpen,
}: {
  photo: ImgData
  setIsOpen: () => void
}) {
  const {
    reset,
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
  } = useForm<CreateAlbumT>({
    shouldUnregister: true,
    resolver: zodResolver(CreateAlbumSchema),
  })
  const { mutate, isSuccess } = useCreateAlbum()

  const createAlbum: SubmitHandler<CreateAlbumT> = (data) => {
    // console.log(data)

    mutate({ ...data, content: [getAlbumImages(photo)] })
  }
  useEffect(() => {
    if (isSuccess && isSubmitSuccessful) {
      setIsOpen()
      reset()
    }
  }, [isSuccess, isSubmitSuccessful])
  return (
    <>
      <form
        className="flex flex-col mb-3 gap-3"
        onSubmit={handleSubmit(createAlbum)}
      >
        <Input
          errors={errors.albumName}
          {...register("albumName")}
          placeHolder="Album name..."
          type="text"
          className="disabled:cursor-not-allowed ring-1 ring-black rounded login  p-3"
        />
        <Input
          {...register("albumDesc")}
          className="disabled:cursor-not-allowed ring-1 resize-none ring-black rounded login  p-3"
          errors={errors?.albumDesc}
          type="text"
          placeHolder="write a small description of your collection/album..."
        />
        <div className="flex w-full justify-around ">
          <Button
            className="text-white bg-orange-400 hover:bg-orange-500 p-3 rounded-md "
            onClick={() => setIsOpen()}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="text-white bg-orange-400 hover:bg-orange-500 p-3 rounded-md"
          >
            Register Album
          </Button>
        </div>
      </form>
    </>
  )
}

export default CreateAlbum
