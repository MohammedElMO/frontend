import { FormEvent, useEffect, useState } from "react"
import useAlbumsName, { AbumName } from "../../hooks/query/useAlbumsName"
import useInsertIntoAlbum from "../../hooks/mutation/useInsertIntoAlbum"
import { TruckImg } from "../../utils/getTruckImg"
import { ImgData } from "../gallery/ImageCard"
import AlbumList from "../Albums/AlbumList"
import Button from "../layout/common/Button"
import SucessToaster from "../../toastify/SucessToaster"
import { getAlbumImages } from "../../utils/getAlbumImages"

type Props = {
  photo: ImgData
  setIsOpen: () => void
  albumNames: AbumName[]
}

function AddToAlbum({ albumNames, photo, setIsOpen }: Props) {
  const [selectedAlbum, setSelectedAlbum] = useState<AbumName>({} as AbumName)
  const { mutate: insertInto, isSuccess } = useInsertIntoAlbum()

  const createAlbum = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    insertInto({
      albumName: selectedAlbum.albumName,
      content: [getAlbumImages(photo)],
    })
  }

  useEffect(() => {
    if (isSuccess) setIsOpen()
  }, [isSuccess])

  if (isSuccess)
    return (
      <SucessToaster
        isSuccess={isSuccess}
        message="you image was added to the album you choose"
      />
    )
  return (
    <form onSubmit={createAlbum}>
      <AlbumList
        selectedAlbum={selectedAlbum}
        setSelectedAlbum={setSelectedAlbum}
        albumNames={albumNames}
      />
      <div className="flex w-full justify-around mt-5">
        <Button
          className="text-white bg-orange-400 hover:bg-orange-500 p-3 rounded-md "
          onClick={() => setIsOpen()}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          className="text-white bg-orange-400 hover:bg-orange-500 p-3 rounded-md"
        >
          add to the Album
        </Button>
      </div>
    </form>
  )
}

export default AddToAlbum
