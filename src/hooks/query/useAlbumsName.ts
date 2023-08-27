import { useQuery } from "@tanstack/react-query"
import { server } from "../../api/serverApi"

export type AbumName = {
  _id: string
  albumName: string
}

const useAlbumsName = () => {
  return useQuery({
    queryKey: ["names"],
    queryFn: () => server.get<AbumName[]>("/api/album/names"),
  })
}

export default useAlbumsName
