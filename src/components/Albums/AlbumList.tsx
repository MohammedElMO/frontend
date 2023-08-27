import { Listbox, Transition } from "@headlessui/react"
import { type AbumName } from "../../hooks/query/useAlbumsName"
type Props = {
  albumNames: AbumName[] | undefined
  selectedAlbum: AbumName
  setSelectedAlbum: React.Dispatch<React.SetStateAction<AbumName>>
}

function AlbumList({ albumNames, selectedAlbum, setSelectedAlbum }: Props) {
  return (
    <>
      <Listbox as="div" value={selectedAlbum} onChange={setSelectedAlbum}>
        <span>you Can Seleted Which Album You want to add it to: </span>
        <Listbox.Button className="ring my-4 rounded hover:bg-orange-400 p-3 w-[100%] ring-orange-400">
          {!selectedAlbum.albumName
            ? "select An Album"
            : selectedAlbum.albumName}
        </Listbox.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Listbox.Options className="rounded w-full p-3 outline-none ring-1 ">
            {albumNames?.map((album) => (
              <Listbox.Option
                className={`cursor-pointer p-2 transition-colors  hover:bg-orange-400 rounded ring-black `}
                key={album._id}
                value={album}
              >
                {album.albumName}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </>
  )
}

export default AlbumList
