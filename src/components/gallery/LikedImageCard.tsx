import { LikedImageResponse } from "../../hooks/query/useAllLikedImages"
import Badge from "../layout/common/Badge"

type LikedImgpProps = {
  data: Omit<LikedImageResponse, "_id">
}
function LikedImageCard({ data: { alt, photographer, src } }: LikedImgpProps) {
  return (
    <article className="relative font-brico overflow-hidden rounded shadow-lg h-fit ">
      <img
        loading="lazy"
        src={src.landscape}
        className=" object-cover"
        alt={alt}
      />
      <div className=" flex  absolute p-3 top-0 right-0 pl-5  h-20"></div>
      <div className="absolute inset-0 p-3 text-white   transition-transform  flex flex-col items-center   gap-4 justify-end h-full ">
        <Badge toDisplay={photographer} />
      </div>
    </article>
  )
}

export default LikedImageCard
