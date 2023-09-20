import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"
import { directions } from "../../data/links/directions"
import { Action, State } from "../../reducers/ImageStateReducer"
import { useEffect, useState } from "react"
import List from "../svgs/List"

function NavBar({
  state: { isFavedSuccessfully, isLikedSuccessfully },
  dispatch,
}: {
  state: State
  dispatch: React.Dispatch<Action>
}) {
  const [isHidden, setIsHidden] = useState(false)
  const [showToggler, setShowToggerler] = useState(false)
  const [userAction, setUserAction] = useState({
    loveClass: "",
    favClass: "",
  })
  const [activeLink, setActiveLink] = useState(0)

  useEffect(() => {
    const resizeEvent = () => {
      const media = window.matchMedia("(max-width: 769px)").matches
      setShowToggerler(media)
    }
    window.addEventListener("resize", resizeEvent)
    return () => window.removeEventListener("resize", resizeEvent)
  }, [showToggler])
  useEffect(() => {
    if (isLikedSuccessfully || isFavedSuccessfully)
      setUserAction({
        favClass: "fav-icon",
        loveClass: "love-icon",
      })
    else {
      setUserAction({
        favClass: "",
        loveClass: "",
      })
    }
  }, [isLikedSuccessfully, isFavedSuccessfully])
  return (
    <nav className=" flex shadow-2xl md:backdrop-blur-md bg-orange-100/30 rounded-xl items-center flex-row-reverse gap-3  z-50 w-full  p-6 pb-3    ">
      <ul
        className={`transition-transform flex flex-row    x-sm:max-md:fixed x-sm:max-md:flex-col  x-sm:max-md:right-0  x-sm:max-md:bg-white x-sm:max-md:shadow-2xl x-sm:max-md:p-6 x-sm:max-md:bottom-0 x-sm:max-md:z-30 x-sm:max-md:h-full gap-6 list-none
    ${
      isHidden || !showToggler ? " translate-x-[0%] " : "translate-x-[100%] "
    } `}
      >
        {directions.map(({ id, ICON, text, to }) => (
          <li key={id}>
            <Link
              onClick={() => setActiveLink(id)}
              to={to}
              className={`flex gap-1 items-center p-3  rounded hover:bg-slate-400/10 ${
                activeLink === id ? "bg-orange-200 " : ""
              } `}
            >
              <ICON
                classA={userAction.loveClass}
                classB={userAction.favClass}
                color="orange"
                colorAlbum="gray"
              />
              {text}
            </Link>
          </li>
        ))}
        {showToggler && (
          <div
            className="bg-orange-400 p-3 mt-auto self-center rounded-md cursor-pointer hover:bg-orange-500"
            onClick={() => setIsHidden(false)}
          >
            <List />
          </div>
        )}
      </ul>
      {showToggler && (
        <div
          className="bg-orange-400 p-3 rounded-md cursor-pointer hover:bg-orange-500"
          onClick={() => setIsHidden(true)}
        >
          <List />
        </div>
      )}
      <SearchBar dispatch={dispatch} />
    </nav>
  )
}

export default NavBar
