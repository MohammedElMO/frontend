import { Route, Routes } from "react-router-dom"
import Albums from "./components/pages/Albums"
import Hote from "./components/pages/Hote"
import Liked from "./components/pages/Liked"
import Favorite from "./components/pages/favorite"
import Core from "./components/layout/Core"
import ImageGrid from "./components/gallery/ImageGrid"
import Home from "./components/pages/Home"
import ProtectedRoute from "./components/Routes/ProtectedRoute"
function App() {
  return (
    <>
      <Routes>
        <Route element={<Core />}>
          <Route path="/" element={<Home />} />
          {/* <Route element={<ProtectedRoute />}> */}
          <Route path="/gallery" element={<ImageGrid />}></Route>
          <Route path="/album" element={<Albums />}></Route>
          <Route path="/fav" element={<Favorite />}></Route>
          <Route path="/hote" element={<Hote />}></Route>
          <Route path="/liked" element={<Liked />}></Route>
        </Route>
        {/* </Route> */}
      </Routes>
    </>
  )
}

export default App
