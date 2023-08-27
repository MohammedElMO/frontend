import { Navigate, Outlet } from "react-router-dom"

function ProtectedRoute() {
  return false ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  )
}

export default ProtectedRoute
