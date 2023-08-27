import { Dialog, Transition } from "@headlessui/react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Fragment, useEffect, useRef } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { SiginInSchema, SiginT } from "../../schema/zodAuth"
import Button from "../layout/common/Button"
import Input from "../layout/common/Input"
import sigin from "../../api/singIn"
import Spinner from "../layout/common/BtnSpinner"
import AuthSucess from "../../toastify/AuthSucess"
import { redirect, useNavigate } from "react-router-dom"
import AuthError from "../../toastify/AuthError"
function SignInDialog({
  isOpen,
  setIsOpen,
  message,
}: {
  isOpen: boolean
  setIsOpen: () => void
  message: string
}) {
  const direct = useNavigate()
  const { error, isLoading, data, mutate, isSuccess } = sigin()
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    clearErrors,
  } = useForm<SiginT>({
    resolver: zodResolver(SiginInSchema),
  })
  const SignIn: SubmitHandler<SiginT> = (FormData) => {
    if (!FormData) return
    mutate({ ...FormData })
  }
  if (isSuccess) {
    const token: string = data.headers["auth-token"]
    console.log(token)
    localStorage.setItem("auth-token", token)
    direct("/gallery")
  }

  return (
    <>
      {isSuccess ? <AuthSucess isSuccess={isSuccess} /> : null}
      {error ? <AuthError error={error} /> : null}
      <Transition
        show={isOpen}
        enter="transition duration-200 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
        as={Fragment}
      >
        <Dialog
          as="div"
          className="z-30 font-brico absolute left-[40%] top-[20%] "
          onClose={() => console.log("hello")}
        >
          <Dialog.Panel className="bg-white p-5 rounded-lg">
            <Dialog.Title
              as="h1"
              className="text-xl text-center font-semibold mb-2"
            >
              {message}
            </Dialog.Title>

            <form
              onSubmit={handleSubmit(SignIn)}
              className="flex flex-col mb-3 gap-3"
            >
              <Input
                errors={errors.username}
                {...register("username")}
                placeHolder="you name..."
                type="text"
                className="ring-1 ring-black rounded login  p-3"
              />
              {/* {isError && <span>{error!.warning}</span>} */}
              <Input
                errors={errors.email}
                {...register("email")}
                placeHolder="you email..."
                type="email"
                className="ring-1 ring-black rounded login  p-3"
              />

              <Input
                errors={errors.password}
                {...register("password")}
                placeHolder="your seacret..."
                type="password"
                className="p-3 ring-1 ring-black rounded login"
              />
              <div className="flex justify-between mt-5">
                <Button
                  className="bg-orange-300 transition-colors text-black rounded p-3"
                  onClick={() => {
                    reset()
                    setIsOpen()
                    clearErrors()
                  }}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-orange-300  transition-colors text-black rounded px-3"
                >
                  {isLoading ? <Spinner /> : " Hit It"}
                </Button>
              </div>
            </form>

            <Dialog.Description className={"text-center"}>
              if you Have an Acount
              <a href="" className="text-orange-300 text-mdS">
                {"  "}
                Login?
              </a>
            </Dialog.Description>
          </Dialog.Panel>
        </Dialog>
      </Transition>
    </>
  )
}

export default SignInDialog
