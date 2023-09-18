import { ImgData } from "../components/gallery/ImageCard"

export const pickFavOnly = (data: ImgData) => {
  return {
    url: data.url,
    photographer: data.photographer,
    photographer_url: data.photographer_url,
    avg_color: data.avg_color,
    src: {
      tiny: data.src.tiny,
      small: data.src.small,
      landscape: data.src.landscape,
      portrait: data.src.portrait,
    },
    alt: data.alt,
  }
}

export type FavOnly = ReturnType<typeof pickFavOnly>
