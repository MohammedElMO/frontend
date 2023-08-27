import { PhotoT } from "./pickWithexception"

const getLikedImageShape = (obj: PhotoT) => {
  return {
    photographer: obj.photographer,
    url: obj.url,
    src: {
      landscape: obj.src.landscape,
      medium: obj.src.medium,
    },
    liked: obj.liked,
    alt: obj.alt,
  }
}

export { getLikedImageShape }
