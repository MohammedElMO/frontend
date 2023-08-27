import { useMutation } from "@tanstack/react-query"
import { server } from "../../api/serverApi"

const useDeleteAlbumImgs = () => {
  return useMutation({
    mutationKey: ["deletedAlbumImges"],
    mutationFn: (albumImgs: string[]) =>
      server.delete("/api/album", {
        headers: {
          "Album-Imgs": albumImgs,
        },
      }),
  })
}

export default useDeleteAlbumImgs
