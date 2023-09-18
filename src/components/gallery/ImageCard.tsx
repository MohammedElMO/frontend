import { useState } from "react"
import DropList from "../DropList"
import Heart from "../svgs/Heart"
import { pickFavOnly } from "../../utils/pickFavOnly"
import { getDescription } from "../../utils/getdescription"
export type ImgData = {
  id: number
  width: number
  height: number
  url: string
  photographer: string
  photographer_url: string
  photographer_id: number
  avg_color: string
  src: {
    original: string
    large2x: string
    large: string
    medium: string
    small: string
    portrait: string
    landscape: string
    tiny: string
  }
  liked: boolean
  alt: string
}

type ImageProps = {
  data: ImgData
  setIsLoved: () => void
  createAlbum: () => void
}

function ImageCard({ setIsLoved, createAlbum, data }: ImageProps) {
  const desc = getDescription(data.url)
  const [heart, setHeart] = useState(false)
  const favouriteImg = pickFavOnly(data)

  return (
    <article
      className={`relative group h-full overflow-hidden    font-brico scale-75 justify-self-end rounded-md shadow-xl `}
    >
      <img
        src={data.src.large}
        alt={data.alt}
        loading="lazy"
        className="h-full w-full object-cover"
      />

      <div className=" flex  absolute p-5 top-0 right-0   h-20">
        <Heart
          isLoved={heart}
          onLike={() => {
            setHeart(true)
            setIsLoved()
          }}
          classA="scale-150 z-20 cursor-pointer"
        />
      </div>
      <DropList createAlbum={createAlbum} data={favouriteImg} />
      <div className="absolute inset-0 p-3 text-white   transition-transform  flex flex-col items-center   gap-4 justify-end h-full ">
        <a
          target="_blank"
          href={data.photographer_url}
          className="text-lg font-bold bg-orange-500 rounded-lg p-2  text-white hover:underline"
        >
          {data.photographer}
        </a>
        <p className="text-center text-2xl font-semibold">{desc}</p>
      </div>
    </article>
  )
}

export default ImageCard
