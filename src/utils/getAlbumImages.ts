import type { ImgData } from "../components/gallery/ImageCard"

export const getAlbumImages = (data: ImgData) => {
  return {
    url: data.url,
    photographer: data.photographer,
    photographer_url: data.photographer_url,
    avg_color: data.avg_color,
    src: {
      small: data.src.small,
      portrait: data.src.portrait,
      landscape: data.src.landscape,
      medium: data.src.medium,
      tiny: data.src.tiny,
    },
    alt: data.alt,
  }
}

export type getAlbumImagesT = ReturnType<typeof getAlbumImages>
