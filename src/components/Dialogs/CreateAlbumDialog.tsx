import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useEffect, useState } from "react"
import CreateAlbum from "../Forms/CreateAlbum"
import { ImgData } from "../gallery/ImageCard"
import AddToAlbum from "../Forms/AddToAlbum"
import Button from "../layout/common/Button"
import Back from "../svgs/Back"
import useAlbumsName from "../../hooks/query/useAlbumsName"
function AlbumDialog({
  photo,
  isOpen,
  setIsOpen,
}: {
  photo: ImgData
  isOpen: boolean
  setIsOpen: () => void
}) {
  const [formState, setFormState] = useState<"create" | "insert" | "">("")
  const { data: albumNames } = useAlbumsName()

  useEffect(() => {
    if (!isOpen) setFormState("")
  }, [isOpen])

  return (
    <Transition
      show={isOpen}
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
        className="z-50 font-brico absolute top-[30%] right-[35%]  "
        onClose={() => null}
      >
        <Dialog.Panel className="bg-white shadow-lg p-5 rounded-lg">
          <Dialog.Title
            as="h1"
            className="text-xl text-orange-400 text-center font-semibold mb-2"
          >
            Create Or Add Images To Existing Album 😃
          </Dialog.Title>
          {!formState && (
            <div className="flex gap-4 justify-center p-4">
              <Button
                onClick={() => setFormState("create")}
                className="text-white bg-orange-400 hover:bg-orange-500 p-3 rounded-md "
              >
                Create An Album
              </Button>
              {albumNames?.data.length !== 0 && (
                <Button
                  onClick={() => setFormState("insert")}
                  className="text-white bg-orange-400 hover:bg-orange-500 p-3 rounded-md "
                >
                  Insert Into Existing One
                </Button>
              )}
            </div>
          )}
          {formState === "create" && (
            <>
              <Button
                onClick={() => setFormState("")}
                className="rounded-full bg-orange-400 p-2 mb-3 "
              >
                <Back />
              </Button>
              <CreateAlbum photo={photo} setIsOpen={setIsOpen} />
            </>
          )}
          {formState === "insert" && (
            <>
              <Button
                onClick={() => setFormState("")}
                className="rounded-full bg-orange-400 p-2 mb-3  "
              >
                <Back />
              </Button>
              <AddToAlbum
                albumNames={albumNames?.data ?? []}
                photo={photo}
                setIsOpen={setIsOpen}
              />
            </>
          )}

          <Dialog.Description className="text-center p-4  text-xl">
            Enjoy Your Images By Storing them into Albums 💖
          </Dialog.Description>
        </Dialog.Panel>
      </Dialog>
    </Transition>
  )
}

export default AlbumDialog

// if (isSubmitted)
//   return (
//     <>
//       <SucessToaster
//         isSuccess={isSubmitSuccessful}
//         message="you've created a new Album successfully"
//       />
//       <Party />
//     </>
//   )
