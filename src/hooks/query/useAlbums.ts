import { useQuery } from "@tanstack/react-query"
import { server } from "../../api/serverApi"

export type AlbumT = {
  _id: string
  content: {
    _id: string
    url: string
    photographer: string
    photographer_url: string
    avg_color: string
    src: {
      landscape: string
      portrait: string
      small: string
      tiny:string,
      medium:string
    }
    liked: boolean
    alt: string
  }[]
  albumName: string
  albumDesc: string
}

const useAlbums = () => {
  return useQuery({
    queryKey: ["albums"],
    queryFn: () => server.get<AlbumT[]>("/api/album"),
  })
}
export default useAlbums
