import { useMutation } from "@tanstack/react-query"
import { server } from "../../api/serverApi"

const useDeleteAllFavs = () => {
  return useMutation({
    mutationKey: ["deletedFav"],
    mutationFn: () => server.delete("/api/fav"),
  })
}

export default useDeleteAllFavs
