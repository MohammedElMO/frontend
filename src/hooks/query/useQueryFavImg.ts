import { useQuery } from "@tanstack/react-query"
import { server } from "../../api/serverApi"

export type FavImgResponse = {
  _id: string
  url: string
  photographer: string
  src: {
    small: string
    portrait: string
    tiny: string
  }

  alt: string
}

const useQureyFavImages = () => {
  return useQuery({
    queryKey: ["favImages"],
    queryFn: () => server.get<FavImgResponse[]>("/api/fav"),
  })
}
export default useQureyFavImages
