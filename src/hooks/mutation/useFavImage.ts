import { useMutation } from "@tanstack/react-query"
import { server } from "../../api/serverApi"
import { FavOnly } from "../../utils/pickFavOnly"

const useMutateFav = () => {
  return useMutation({
    mutationKey: ["favImagesInGallery"],
    mutationFn: (imgData: FavOnly) => server.post("/api/fav", imgData),
  })
}
export default useMutateFav
