import List from "./svgs/List"
import { Menu, Transition } from "@headlessui/react"
import Fav from "./svgs/fav"
import Image from "./svgs/Image"
import { Fragment, useEffect } from "react"
import Button from "./layout/common/Button"
import { FavOnly } from "../utils/pickFavOnly"
import { useOutletContext } from "react-router-dom"
import { ActionT, DispatchT } from "../reducers/ImageStateReducer"
import useMutateFav from "../hooks/mutation/useFavImage"

type ListProps = {
  data: FavOnly
  createAlbum: () => void
}

function DropList({ data: ImgData, createAlbum }: ListProps) {
 

  const { mutate, isSuccess } = useMutateFav()
  const { dispatch } = useOutletContext<DispatchT>()
  useEffect(() => {
    if (isSuccess)
      dispatch({
        type: ActionT.FAV_IMAGE,
        payload: isSuccess,
      })
  }, [isSuccess])
  return (
    <section className="flex  flex-col cursor-pointer rounded-md mx-3  my-5 top-0 absolute z-40 bg-orange-500">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <List />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute flex flex-col gap-3 w-48 p-4 left-0 mt-2  origin-top-right divide-y  rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item as="div" className="flex">
              {({ active }) => (
                <Button
                  onClick={createAlbum}
                  className={`${
                    active && "bg-orange-500 text-white "
                  } flex items-center gap-2 mt-2  rounded`}
                >
                  <Image colorAlbum="currentColor" />
                  Add To album
                </Button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Button
                  className={`${
                    active && "bg-orange-500 text-white "
                  } flex items-center gap-2 mt-2  rounded`}
                  onClick={() => {
                    mutate(ImgData)
                  }}
                >
                  <Fav color="currentColor" />
                  Add to Fav
                </Button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </section>
  )
}

export default DropList
