import { useMutation } from "@tanstack/react-query"
import { server } from "../../api/serverApi"

const useDeleteSelectedImges = () => {
  return useMutation({
    mutationKey: ["deletedFav"],
    mutationFn: (imgs:any) => server.delete("/api/album",imgs),
  })
}

export default useDeleteSelectedImges
