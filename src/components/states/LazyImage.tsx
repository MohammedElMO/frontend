import {
  LazyLoadImage,
  trackWindowScroll,
  ScrollPosition,
} from "react-lazy-load-image-component"

const LazyGallery = ({
  image,
  scrollPosition,
}: {
  image: {
    alt: string
    src: string
    tiny: string
  }
  scrollPosition: ScrollPosition
}) => (
  <LazyLoadImage
    effect="blur"
    alt={image.alt}
    scrollPosition={scrollPosition}
    src={image.src}
    placeholderSrc={image.tiny}
  />
)

export default trackWindowScroll(LazyGallery)
