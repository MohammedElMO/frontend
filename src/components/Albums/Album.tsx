import { useState } from "react"
import { type AlbumT } from "../../hooks/query/useAlbums"
import DetailsDialog from "../Dialogs/ShowDialog"
import AlbumImg from "./AlbumImg"

type AlbumProps = {
  album: AlbumT
}

function Album({ album }: AlbumProps) {
  const imagesCount = album.content.length - 1
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  return (
    <article className="flex gap-5 flex-row-reverse ">
      <div>
        <h1>{album.albumName}</h1>
        <div>{album.albumDesc}</div>
      </div>
      <AlbumImg
        setIsDetailsOpen={() => setIsDetailsOpen(!isDetailsOpen)}
        imagesCount={imagesCount}
        {...album.content[0]}
      />
      {isDetailsOpen && (
        <DetailsDialog
          albumName={album.albumName}
          album={album.content.map((obj) => ({ ...obj, isChecked: false }))}
          setIsDetailsOpen={() => setIsDetailsOpen(false)}
          isDetailsOpen={isDetailsOpen}
        />
      )}
    </article>
  )
}

export default Album
