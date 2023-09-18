import { FavImgResponse } from "../../hooks/query/useQueryFavImg"
import Star from "../svgs/star"

type FavProps = {
  data: FavImgResponse
}

function FavImageCard({
  data: {
    alt,
    photographer,
    src: { tiny },
  },
}: FavProps) {
  return (
    <>
      <article className="relative font-brico overflow-hidden rounded shadow-lg h-fit ">
        <img
          loading="lazy"
          src={tiny}
          className=" w-full object-cover"
          alt={alt}
        />
        <div className=" flex  absolute p-3 top-0 right-0 pl-5  h-20 text-white gap-3">
          {photographer}
          <Star />
        </div>
      </article>
    </>
  )
}

export default FavImageCard
