import { useState } from "react"
import useQureyFavImages from "../../hooks/query/useQueryFavImg"
import FavErrorToaster from "../../toastify/ErrorToaster"
import DeleteFavDialog from "../Dialogs/DeleteFavDialog"
import DeleteButton from "../layout/common/DeleteButton"
import Loader from "../layout/common/Loader"
import FavImageCard from "../gallery/FavImageCard"
import EmptyState from "../layout/EmptyStates/EmptyState"
import useDeleteAllFavs from "../../hooks/mutation/useDeleteAllFavs"

function Favorite() {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const { mutate: DeleteAll, isSuccess: deletedWithSucess } = useDeleteAllFavs()
  const { data: FavImages, isError, isLoading } = useQureyFavImages()
  const isDelete =
    isDeleteDialogOpen || deletedWithSucess || FavImages?.data.length === 0
  const isNoData = FavImages?.data.length === 0


  if (isNoData) return <EmptyState message="There is not Fav Images " />
  if (isLoading) return <Loader />
  if (isError) return <FavErrorToaster error={isError} />
  return (
    <div className="flex flex-col pt-24 items-center  justify-center">
      {FavImages?.data.length > 0 && (
        <DeleteButton onDelete={() => setIsDeleteDialogOpen(true)} />
      )}
      {isDelete && (
        <div className="absolute z-30 inset-0 bg-black bg-opacity-50"></div>
      )}
      <DeleteFavDialog
        DeleteAll={DeleteAll}
        isSuccess={deletedWithSucess}
        setIsDeleteDialogOpen={setIsDeleteDialogOpen}
        isDeleteDialogOpen={isDeleteDialogOpen}
      />
      <section className=" min-h-screen gap-3 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 p-5">
        {FavImages?.data.map((favImg) => (
          <FavImageCard data={favImg} key={favImg._id} />
        ))}
      </section>
    </div>
  )
}

export default Favorite
