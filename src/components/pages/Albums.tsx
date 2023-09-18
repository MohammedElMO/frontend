import { useOutletContext } from "react-router-dom"
import useAlbums from "../../hooks/query/useAlbums"
import Album from "../Albums/Album"
import EmptyState from "../layout/EmptyStates/EmptyState"
import Loader from "../layout/common/Loader"
import SucessToaster from "../../toastify/SucessToaster"
import { DispatchT } from "../../reducers/ImageStateReducer"

function Albums() {
  const { data: albums, isLoading } = useAlbums()
  const { state } = useOutletContext<DispatchT>()
  if (isLoading) return <Loader />
  if (!albums?.data.length) return <EmptyState message="no Albums were found" />

  return (
    <>
    
      {state.toast.isSuccess && (
        <SucessToaster
          isSuccess={state.toast.isSuccess}
          message={
            state.albumDeleteCount +
            ` images were deleted  from ${state.toast.albumName}'s Album`
          }
        />
      )}
      <section className="p-5 grid grid-cols-1  items-end  place-items-start  min-h-screen">
        {albums?.data.map((album) => <Album key={album._id} album={album} />)}
      </section>
    </>
  )
}

export default Albums
