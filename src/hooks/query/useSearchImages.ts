import { useQuery } from "@tanstack/react-query"
import { imageInstance } from "../../api/apiClient"
import { CuratedApiResopnse } from "./useInfiniteImages"

export const useSearchQuery = (query: string) => {
  return useQuery({
    queryKey: ["favImages"],
    queryFn: ({ signal }) => {
      if (!query) return null

      return imageInstance.get<CuratedApiResopnse>("/search", {
        params: {
          query,
          per_page: 6,
        },
        signal,
      })
    },
  })
}
export default useSearchQuery
