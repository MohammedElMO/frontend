
export enum ActionT {
  LIKE_IMAGE = "LIKED_IMAGE",
  FAV_IMAGE = "FAV_IMAGE",
  SEARCH_IMG = "SEARCH_IMG",
  IMG_CHECKED = "IMG_CHECKED",
  ALBUM_IMG_DELETE = "ALBUM_IMG_DELETE",
  ALBUM_DELETE_COUNT = "ALBUM_DELETE_COUNT",
}

type LikedAction = {
  type: ActionT.LIKE_IMAGE
  payload: boolean
}
type DelteAlbumCountAction = {
  type: ActionT.ALBUM_DELETE_COUNT
  payload: number
}
type FavAction = {
  type: ActionT.FAV_IMAGE
  payload: boolean
}
type SearchAction = {
  type: ActionT.SEARCH_IMG
  payLoad: string
}
type CheckAction = {
  type: ActionT.IMG_CHECKED
  payLoad: boolean
}
type DeleteImgAlbumAction = {
  type: ActionT.ALBUM_IMG_DELETE
  payLoad: [string, boolean]
}

export type Action =
  | FavAction
  | LikedAction
  | SearchAction
  | CheckAction
  | DeleteImgAlbumAction
  | DelteAlbumCountAction
export type State = {
  isLikedSuccessfully: boolean
  isFavedSuccessfully: boolean
  query: string
  isChecked: boolean
  toast: {
    isSuccess: boolean
    albumName: string
  }
  albumDeleteCount: number
}

export const ImageInitalState: State = {
  isLikedSuccessfully: false,
  isFavedSuccessfully: false,
  query: "",
  isChecked: false,
  toast: {
    isSuccess: false,
    albumName: "",
  },
  albumDeleteCount: 0,
}

export type DispatchT = {
  dispatch: React.Dispatch<Action>
  state: State
}

export const ImageStateReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionT.LIKE_IMAGE:
      return {
        ...state,
        isLikedSuccessfully: action.payload,
      }
    case ActionT.FAV_IMAGE: {
      return {
        ...state,
        isFavedSuccessfully: action.payload,
      }
    }

    case ActionT.SEARCH_IMG:
      return {
        ...state,
        query: action.payLoad,
      }
    case ActionT.IMG_CHECKED:
      return {
        ...state,
        isChecked: action.payLoad,
      }
    case ActionT.ALBUM_IMG_DELETE:
      return {
        ...state,
        toast: {
          isSuccess: action.payLoad[1],
          albumName: action.payLoad[0],
        },
      }
    case ActionT.ALBUM_DELETE_COUNT:
      return {
        ...state,
        albumDeleteCount: action.payload,
      }

    default:
      return {
        ...state,
      }
  }
}
