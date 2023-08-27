import { useMutation } from "@tanstack/react-query"
import { server } from "../../api/serverApi"
import { FavOnly } from "../../utils/pickFavOnly"
// import { useOutletContext } from "react-router-dom"

const useMutateFav = () => {
  return useMutation({
    mutationKey: ["favImages"],
    mutationFn: (imgData: FavOnly) => server.post("/api/fav", imgData),
  })
}
export default useMutateFav
