import InfiniteScroll from "react-infinite-scroll-component"
import ImageCard, { ImgData } from "./ImageCard"
import useInfiniteImages from "../../hooks/query/useInfiniteImages"
import useMutateLikedImages from "../../hooks/mutation/useLikedImage"
import Loader from "../layout/common/Loader"
import { useOutletContext } from "react-router-dom"
import { type DispatchT } from "../../reducers/ImageStateReducer"
import useSearchQuery from "../../hooks/query/useSearchImages"
import AlbumDialog from "../Dialogs/CreateAlbumDialog"
import { useEffect, useState } from "react"
import ToastLove from "../../toastify/ToastLove"

function ImageGrid() {
  const { state } = useOutletContext<DispatchT>()
  const infinitImgQueryApi = useInfiniteImages()
  const searchQueryApi = useSearchQuery(state.query)
  const { isSuccess, mutate } = useMutateLikedImages()
  const [photo, setPhoto] = useState<ImgData>({} as ImgData)
  const [isAlbumOpen, setIsAlbumOpen] = useState(false)
  useEffect(() => {
    searchQueryApi.refetch()
  }, [isSuccess])

  const currentFetchedImages =
    infinitImgQueryApi.data?.pages.reduce(
      (total, current) => current.data.photos.length + total,
      0,
    ) || 0

  if (infinitImgQueryApi.error) return <div>No Data Has been gotten</div>
  if (infinitImgQueryApi.isLoading) return <Loader />
  if (infinitImgQueryApi.isFetched || searchQueryApi.isFetched)
    return !searchQueryApi.data?.data || !state.query ? (
      <>
        <InfiniteScroll
          className="grid pt-20 py-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  h-screen text-xl relative "
          dataLength={currentFetchedImages} //This is important field to render the next data
          next={() => infinitImgQueryApi.fetchNextPage()}
          hasMore={!!infinitImgQueryApi.hasNextPage}
          loader={<Loader />}
        >
          {isSuccess && <ToastLove isSuccess={isSuccess} />}
          {infinitImgQueryApi.data?.pages.map((page) =>
            page.data.photos.map((photo) => (
              <ImageCard
                createAlbum={() => {
                  setPhoto(photo)
                  setIsAlbumOpen(!isAlbumOpen)
                }}
                key={photo.id}
                data={photo}
                setIsLoved={() => {
                  mutate({ ...photo, liked: true })
                }}
              />
            )),
          )}
        </InfiniteScroll>
        <AlbumDialog
          photo={photo}
          setIsOpen={() => setIsAlbumOpen(false)}
          isOpen={isAlbumOpen}
        />
      </>
    ) : (
      <div className="grid font-brico  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-xl">
        {searchQueryApi.data.data?.photos.map((photo) => (
          <ImageCard
            createAlbum={() => {
              setIsAlbumOpen(!isAlbumOpen)
              setPhoto(photo)
            }}
            key={photo.id}
            data={photo}
            setIsLoved={() => {
              mutate({ ...photo, liked: true })
            }}
          />
        ))}
        <AlbumDialog
          photo={photo}
          setIsOpen={() => setIsAlbumOpen(false)}
          isOpen={isAlbumOpen}
        />
      </div>
    )
}

export default ImageGrid
