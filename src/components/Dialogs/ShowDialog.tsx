import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useEffect, useRef, useState } from "react"
import Button from "../layout/common/Button"
import ShowImgCard from "../Albums/ShowImgCard"
import useDeleteAlbumImgs from "../../hooks/mutation/useDeleteAlbums"
import { useOutletContext } from "react-router-dom"
import { ActionT, DispatchT } from "../../reducers/ImageStateReducer"
type Details = {
  isDetailsOpen: boolean
  albumName: string
  setIsDetailsOpen: () => void
  album: {
    _id: string
    url: string
    photographer: string
    photographer_url: string
    avg_color: string
    src: {
      landscape: string
      portrait: string
      small: string
      tiny: string
      medium: string
    }
    liked: boolean
    alt: string
    isChecked: boolean
  }[]
}

function DetailsDialog({
  albumName,
  album,
  setIsDetailsOpen,
  isDetailsOpen,
}: Details) {
  const scroll = useRef<HTMLDivElement>(null)
  const [showSelection, setShowSelection] = useState(false)
  const [selectedImgs, setSelectedImgs] = useState<string[]>([])

  useEffect(() => {
    scroll.current?.scrollTo(0, 0)
  }, [])
  const { dispatch } = useOutletContext<DispatchT>()
  const { mutate, isSuccess } = useDeleteAlbumImgs()
  useEffect(() => {
    if (isSuccess) {
      dispatch({
        type: ActionT.ALBUM_IMG_DELETE,
        payLoad: [albumName, isSuccess],
      })
      dispatch({
        type: ActionT.ALBUM_DELETE_COUNT,
        payload: selectedImgs.length,
      })
      setIsDetailsOpen()
    }
  }, [isSuccess])

  return (
    <Transition
      show={isDetailsOpen}
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
        className="font-brico  absolute inset-0  w-[80%] h-[80%] z-50 "
        onClose={() => null}
      >
        <Dialog.Panel className="bg-white  flex ring ring-orange-400 flex-col  justify-between w-full h-full shadow-xl p-2 rounded-lg ">
          <Dialog.Title
            as="h1"
            className="text-xl p-5 text-center font-semibold mb-2"
          >
            This Is Your Saved Album {albumName}
          </Dialog.Title>
          <div className="flex justify-end p-3">
            <Button
              disabled={selectedImgs.length === 0}
              onClick={() => {
                setShowSelection(!showSelection)
                mutate(selectedImgs)
              }}
              className="disabled:bg-red-300  disabled:cursor-not-allowed  px-3 py-1 rounded-md  bg-red-500 text-white ring-1 ring-red-500 "
            >
              {selectedImgs.length === 0 ? "select to Delete" : "Delete"}
            </Button>
          </div>

          <Dialog.Description
            as="div"
            ref={scroll}
            className="h-full overflow-y-scroll rounded grid grid-cols-3 gap-3"
          >
            {album.map((img) => (
              <ShowImgCard
                selectedImgs={selectedImgs}
                onSelect={() =>
                  setSelectedImgs((ids) =>
                    ids.find((i) => i === img._id)!
                      ? ids.filter((i) => i !== img._id)
                      : [...ids, img._id],
                  )
                }
                showSelection={showSelection}
                key={img._id}
                albumData={img}
              />
            ))}
          </Dialog.Description>

          <section className="flex w-full  h-fit justify-between p-3 items-end mt-4 ">
            <Button
              className="p-3 rounded-md transition-colors bg-orange-500 text-white hover:ring-1 hover:ring-orange-400 hover:bg-white hover:text-black"
              onClick={setIsDetailsOpen}
            >
              Done
            </Button>
            <Button className="p-3 rounded-md transition-colors bg-orange-500 text-white hover:ring-1 hover:ring-orange-400 hover:bg-white hover:text-black">
              I'm Sure!
            </Button>
          </section>
        </Dialog.Panel>
      </Dialog>
    </Transition>
  )
}

export default DetailsDialog
