import { useMutation } from "@tanstack/react-query"
import { server } from "../../api/serverApi"
import { PhotoT } from "../../utils/pickWithexception"
import { getLikedImageShape } from "../../utils/getLikedImageShape"

const useMutateLikedImages = () => {
  return useMutation({
    mutationKey: ["likedImages"],
    mutationFn: (imgData: PhotoT) =>
      server.post("/api/liked", getLikedImageShape(imgData)),
  })
}
export default useMutateLikedImages
