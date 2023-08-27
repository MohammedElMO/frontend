import { useInfiniteQuery } from "@tanstack/react-query"
import { imageInstance } from "../../api/apiClient"
import { AxiosRequestConfig } from "axios"

export type CuratedApiResopnse = {
  page: number
  per_page: number
  total_results: number
  photos: [
    {
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
    },
  ]
  next_page: string
}

const useInfiniteImages = () => {
  const getCuratedImages = (pageParam: number) =>
    imageInstance.get<CuratedApiResopnse>("/curated", {
      params: {
        page: pageParam,
        per_page: 6,
      },
    })

  return useInfiniteQuery({
    queryKey: ["Images"],
    queryFn: ({ pageParam = 1 }) => getCuratedImages(pageParam),
    getNextPageParam: (lastPage, pages) =>
      lastPage.data.next_page ? pages.length + 1 : undefined,
  })
}

export default useInfiniteImages
