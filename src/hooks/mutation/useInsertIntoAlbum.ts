import { useMutation } from "@tanstack/react-query"
import { server } from "../../api/serverApi"
import { getAlbumImagesT } from "../../utils/getAlbumImages"
const useInsertIntoAlbum = () => {
  return useMutation({
    mutationKey: ["ExistedAlbums"],
    mutationFn: (album: { content: getAlbumImagesT[]; albumName: string }) =>
      server.post("/api/album/" + album.albumName, album.content),
  })
}

export default useInsertIntoAlbum
