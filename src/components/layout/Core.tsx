import { Outlet } from "react-router-dom"
import Main from "./common/Main"
import NavBar from "./NavBar"
import { useReducer } from "react"
import {
  ImageInitalState,
  ImageStateReducer,
} from "../../reducers/ImageStateReducer"

function Core() {
  const [state, dispatch] = useReducer(ImageStateReducer, ImageInitalState)

  return (
    <Main className="min-h-screen ">
      <NavBar state={state} dispatch={dispatch} />
      <Outlet context={{ dispatch, state }} />
    </Main>
  )
}

export default Core
