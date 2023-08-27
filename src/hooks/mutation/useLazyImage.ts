import { useQuery } from "@tanstack/react-query"
import { lazy, useEffect, useState } from "react"

const useLazyImage = (src: {
  original: string
  large2x: string
  large: string
  medium: string
  small: string
  portrait: string
  landscape: string
  tiny: string
}) => {
  const [isLoading, seIsLoading] = useState(false)
  const [url, setImageState] = useState("")
  const lazyImage = new Image()
  // show tiny blured while the bigger is loading
  useEffect(() => {
    const imageSrc = new Promise<HTMLImageElement>((resolve) => {
      seIsLoading(true)
      lazyImage.src = src.large
      lazyImage.onload = (e) => {
        resolve(lazyImage)
      }
    })
    imageSrc.then((data) => {
      setImageState(data.src)
      seIsLoading(false)
    })
  }, [url])

  return {
    isLoading,
    url,
  }
}

export default useLazyImage
