import { useEffect, useRef } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function ToastLove({isSuccess}:{isSuccess:boolean}) {
  const alertRef = useRef<HTMLButtonElement>(null)
    useEffect(() => {
      if (isSuccess) alertRef.current?.click()
    }, [isSuccess])

  const notify = () =>
    toast("💘 you Lived it ", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      className:"bg-pink-400 text-pink-200"
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
        theme="light"
      />
      <ToastContainer />
    </div>
  )
}

export default ToastLove
