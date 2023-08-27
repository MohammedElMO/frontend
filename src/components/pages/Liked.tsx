import useAllLikedImages from "../../hooks/query/useAllLikedImages"
import Loader from "../layout/common/Loader"
import LikedImageCard from "../gallery/LikedImageCard"
import EmptyState from "../layout/EmptyStates/EmptyState"

function Liked() {
  const { data, isError, isLoading } =  useAllLikedImages()
  if (isLoading) return <Loader />
  if (isError) return <span>{data?.status}</span>
  if (!data.data.length)
    return <EmptyState message="No Liked Images are Here" />

  return (
    <section className="gap-2  min-h-screen grid place-items-center  p-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3   ">
      {data.data.map((img) => (
        <LikedImageCard data={img} key={img._id} />
      ))}
    </section>
  )
}

export default Liked

/// building with fresh tsconfig tsc
// pm2 i and exectute node dist/index.js
