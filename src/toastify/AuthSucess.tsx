import { useEffect, useRef } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function AuthSucess({ isSuccess }: { isSuccess: boolean }) {
  const alertRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (isSuccess) alertRef.current?.click()
  }, [isSuccess])
  const notify = () =>
    toast.success("👍 you've successfuly signed In", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    })
  return (
    <div>
      <button onClick={notify} ref={alertRef} hidden />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  )
}
export default AuthSucess
