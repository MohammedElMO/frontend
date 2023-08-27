import InfiniteScroll from "react-infinite-scroll-component"
import ImageCard, { ImgData } from "./ImageCard"
import useInfiniteImages from "../../hooks/query/useInfiniteImages"
import useMutateLikedImages from "../../hooks/mutation/useLikedImage"
import Loader from "../layout/common/Loader"
import { useOutletContext } from "react-router-dom"
import { ActionT, type DispatchT } from "../../reducers/ImageStateReducer"
import useSearchQuery from "../../hooks/query/useSearchImages"
import AlbumDialog from "../Dialogs/CreateAlbumDialog"
import { useEffect, useState } from "react"

function ImageGrid() {
  const [photo, setPhoto] = useState<ImgData>({} as ImgData)
  const { isSuccess, mutate } = useMutateLikedImages()
  const [isAlbumOpen, setisAlbumOpen] = useState(false)
  const { dispatch, state } = useOutletContext<DispatchT>()
  const {
    data: searchData,
    isFetched: isThereData,
    refetch: reFresh,
  } = useSearchQuery(state.query)
  const {
    data: Images,
    error,
    hasNextPage,
    fetchNextPage,
    isLoading,
    isFetched,
  } = useInfiniteImages()
  useEffect(() => {
    if (isSuccess)
      dispatch({
        type: ActionT.LIKE_IMAGE,
        payload: isSuccess,
      })
    reFresh()
  }, [isSuccess, state.query])

  const currentFetchedImages =
    Images?.pages.reduce(
      (total, current) => current.data.photos.length + total,
      0,
    ) || 0

  if (error) return <div>No Data Has been gotten</div>
  if (isLoading) return <Loader />
  if (isFetched || isThereData)
    return !searchData?.data || !state.query ? (
      <>
        <InfiniteScroll
          className="grid pt-20 py-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  h-screen text-xl relative "
          dataLength={currentFetchedImages} //This is important field to render the next data
          next={() => fetchNextPage()}
          hasMore={!!hasNextPage}
          loader={<Loader />}
        >
          {Images?.pages.map((page) =>
            page.data.photos.map((photo) => (
              <ImageCard
                createAlbum={() => {
                  setPhoto(photo)
                  setisAlbumOpen(!isAlbumOpen)
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
          setIsOpen={() => setisAlbumOpen(false)}
          isOpen={isAlbumOpen}
        />
      </>
    ) : (
      <div className="grid  pt-20 py-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  h-screen text-xl relative">
        {searchData.data?.photos.map((photo) => (
          <ImageCard
            createAlbum={() => {
              setisAlbumOpen(!isAlbumOpen)
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
          setIsOpen={() => setisAlbumOpen(false)}
          isOpen={isAlbumOpen}
        />
      </div>
    )
}

export default ImageGrid
