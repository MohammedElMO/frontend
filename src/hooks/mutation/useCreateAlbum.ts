import { useMutation } from "@tanstack/react-query"
import { server } from "../../api/serverApi"
import { getAlbumImagesT } from "../../utils/getAlbumImages"
const useCreateAlbum = () => {
  return useMutation({
    mutationKey: ["albums"],
    mutationFn: (album: {
      albumName: string
      albumDesc: string
      content: getAlbumImagesT[]
    }) => server.post("/api/album", album),
  })
}

export default useCreateAlbum
