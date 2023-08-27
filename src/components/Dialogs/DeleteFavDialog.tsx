import { Dialog, Transition } from "@headlessui/react"
import React, { Fragment } from "react"
import Button from "../layout/common/Button"
import SucessToaster from "../../toastify/SucessToaster"
import { UseMutateFunction } from "@tanstack/react-query"

type DeletDialogProps = {
  isDeleteDialogOpen: boolean
  isSuccess: boolean
  setIsDeleteDialogOpen: React.Dispatch<React.SetStateAction<boolean>>
  DeleteAll: UseMutateFunction<unknown, unknown, void, unknown>
}

function DeleteFavDialog({
  setIsDeleteDialogOpen,
  DeleteAll,
  isSuccess,
  isDeleteDialogOpen,
}: DeletDialogProps) {
  if (isSuccess)
    return (
      <SucessToaster
        isSuccess={isSuccess}
        message="the favs Has been Deleted Successfully"
      />
    )
  return (
    <Transition
      show={isDeleteDialogOpen}
      enter="transition duration-200 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
      as={Fragment}
    >
      <Dialog
        as="div"
        className="z-30  font-brico absolute top-[40%] left-[35%] "
        onClose={() => null}
      >
        <Dialog.Panel className="bg-white shadow-lg text-red-400 p-5 rounded-lg ">
          <Dialog.Title
            as="h1"
            className="text-xl text-center font-semibold mb-2"
          >
            Are you Sure You Want To Delete All the Saved Images ?!
          </Dialog.Title>

          <Dialog.Description></Dialog.Description>
          <section className="flex justify-evenly">
            <Button
              onClick={() => setIsDeleteDialogOpen(false)}
              className="transition-colors bg-red-400 hover:bg-white hover:text-red-400 text-white py-2 px-3 rounded hover:ring-1 hover:ring-red-400"
            >
              Cancel
            </Button>
            <Button
              onClick={() => DeleteAll()}
              className="transition-colors bg-red-400 hover:bg-white hover:text-red-400 text-white py-2 px-3 rounded hover:ring-1 hover:ring-red-400"
            >
              I'm Sure!
            </Button>
          </section>
        </Dialog.Panel>
      </Dialog>
    </Transition>
  )
}

export default DeleteFavDialog
