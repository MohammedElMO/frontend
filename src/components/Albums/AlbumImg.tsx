type imgProp = {
  url: string
  photographer: string
  photographer_url: string
  avg_color: string
  src: {
    landscape: string
    portrait: string
    small: string
  }
  liked: boolean
  alt: string
  imagesCount: number
  setIsDetailsOpen: () => void
}
function AlbumImg({ setIsDetailsOpen, src, alt, imagesCount }: imgProp) {
  return (
    <div
      onClick={setIsDetailsOpen}
      className="font-brico cursor-pointer relative transition-transform hover:translate-y-2 hover:translate-x-2   rounded-md overflow-hidden"
    >
      <img className="h-48 object-cover " src={src.landscape} alt={alt} />
      {imagesCount > 0 && (
        <span className="text-white text-lg absolute top-0 right-0 p-2 shadow-lg bg-black/50 rounded-b-full ">
          +{imagesCount}
        </span>
      )}
    </div>
  )
}

export default AlbumImg
