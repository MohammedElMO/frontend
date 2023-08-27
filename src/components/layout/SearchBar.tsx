import Input from "../layout/common/Input"
import SearchButton from "../layout/common/SearchButton"
import Logo from "../layout/common/logo"
import { type Action, ActionT } from "../../reducers/ImageStateReducer"
import { useState } from "react"
import { useLocation } from "react-router-dom"

function SearchBar({ dispatch }: { dispatch: React.Dispatch<Action> }) {
  const [search, setSearch] = useState("")
  const location = useLocation()
  const isDisabled = location.pathname !== "/gallery"
  return (
    <header className="flex flex-1 items-center  relative  ">
      <Logo />
      <div className="flex justify-center w-full items-center">
        <Input
          className="relative shadow-lg text-md flex-1 disabled:bg-gray-100   p-3 bg-gray-500/20 rounded-md  outline-0 "
          type="text"
          placeHolder={"Tell Us What you wanna See..."}
          onChange={(e) => setSearch(e.target.value)}
          disabled={isDisabled}
        />
        <SearchButton
          isDisabled={isDisabled}
          onSearch={() =>
            dispatch({
              type: ActionT.SEARCH_IMG,
              payLoad: search,
            })
          }
        />
      </div>
    </header>
  )
}

export default SearchBar
