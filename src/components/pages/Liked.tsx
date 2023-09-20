import useAllLikedImages from "../../hooks/query/useAllLikedImages"
import Loader from "../layout/common/Loader"
import LikedImageCard from "../gallery/LikedImageCard"
import EmptyState from "../layout/EmptyStates/EmptyState"

function Liked() {
  const { data: likedImgs, isError, isLoading,isPaused } = useAllLikedImages()
  if (isLoading) return <Loader />
  if (isError ||isPaused) return <span>{likedImgs?.status}</span>
  if (!likedImgs.data.length)
    return <EmptyState message="No Liked Images are Here" />

  return (
    <section className="gap-3 min-h-screen grid   p-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3   ">
      {likedImgs?.data.map((img) => (
        <LikedImageCard data={img} key={img._id} />
      ))}
    </section>
  )
}

export default Liked
