import { useQuery } from "@tanstack/react-query"
import { server } from "../../api/serverApi"

export type LikedImageResponse = {
  _id: string
  url: string
  photographer: string
  src: {
    landscape: string
    medium: string
  }
  liked: boolean
  alt: string
}

const useAllLikedImages = () => {
  return useQuery({
    queryKey: ["likedImgesArchive"],
    queryFn: () => server.get<LikedImageResponse[]>("/api/liked"),
  })
}
export default useAllLikedImages
