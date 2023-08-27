import Delete from "../../svgs/Delete"
import Button from "./Button"

type DeleteButtonProps = {
  onDelete: () => void
}

function DeleteButton({ onDelete }: DeleteButtonProps) {
  return (
    <Button
      onClick={onDelete}
      className=" justify-self-end  bg-red-500 font-brico font-semibold text-white flex gap-2 p-3 rounded-lg flex-row-reverse"
    >
      Delete All fav
      <Delete />
    </Button>
  )
}

export default DeleteButton
