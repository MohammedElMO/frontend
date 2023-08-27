import { useEffect, useRef } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function AuthError({ error }: { error: any }) {
  const alertRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (error) alertRef.current?.click()
  }, [error])
  const notify = () =>
    toast.error("There is an error accured", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    })
  return (
    <div>
      <button ref={alertRef} onClick={notify} hidden />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </div>
  )
}
export default AuthError
