import Input from "../layout/common/Input"
import SearchButton from "../layout/common/SearchButton"
import Logo from "../layout/common/logo"
import { type Action, ActionT } from "../../reducers/ImageStateReducer"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import Search from "../svgs/Search"
import { ClipLoader } from "react-spinners"
import Button from "./common/Button"

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
        <Button
          className="hover:bg-orange-400  disabled:bg-orange-200 disabled:cursor-not-allowed bg-orange-500 font-brico flex gap-2 justify-center items-center text-white w-28 h-10 px-3 py-2 absolute right-[5px] rounded"
          disabled={isDisabled}
          onClick={() =>
            dispatch({
              type: ActionT.SEARCH_IMG,
              payLoad: search,
            })
          }
        >
          {/* <ClipLoader
              color="#FFA500"
              cssOverride={{
                height: "23px",
                width: "23px",
              }}
            /> */}
          search
          <Search />
        </Button>
      </div>
    </header>
  )
}

export default SearchBar
