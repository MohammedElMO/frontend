export type PhotoT = {
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

export const pickWithexception = (data: PhotoT | Omit<PhotoT, "id">) => {
  return {
    url: data.url,
    photographer: data.photographer,
    photographer_url: data.photographer_url,
    avg_color: data.avg_color,
    src: {
      tiny: data.src.tiny,
      small: data.src.small,
      
    },
    liked: data.liked,
    alt: data.alt,
  }
}
