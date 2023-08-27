import { ReactNode } from "react"

type ImageProps = {
  albumData: {
    _id: string
    url: string
    photographer: string
    photographer_url: string
    avg_color: string
    src: {
      landscape: string
      portrait: string
      small: string
      tiny: string
      medium: string
    }
    liked: boolean
    alt: string
    isChecked: boolean
  }
  showSelection: boolean
  onSelect: () => void
  selectedImgs: string[]
}

function ShowImgCard({
  albumData: {
    alt,
    photographer,
    photographer_url,
    src: { tiny },
    isChecked,
    _id,
  },
  selectedImgs,
  onSelect,
}: ImageProps) {
  const imgSelected = selectedImgs.find((i) => i.includes(_id))
  return (
    <article
      onClick={onSelect}
      className={`relative flex-1  cursor-pointer font-brico shadow-xl ${
        isChecked ? "bg-black/50" : ""
      }`}
    >
      {imgSelected && (
        <div className="absolute inset-0 rounded-md bg-black/50"></div>
      )}
      <img
        src={tiny}
        alt={alt}
        loading="lazy"
        className="flex-1 h-full w-full  rounded-md "
      />

      <div className="absolute inset-0 p-3 text-white   transition-transform  flex flex-col items-center   gap-4 justify-end h-full ">
        <a
          target="_blank"
          href={photographer_url}
          className="text-lg font-bold bg-orange-500 rounded-lg p-2  text-white hover:underline"
        >
          {photographer}
        </a>
      </div>
    </article>
  )
}

export default ShowImgCard
