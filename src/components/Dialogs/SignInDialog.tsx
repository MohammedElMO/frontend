import { Dialog, Transition } from "@headlessui/react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Fragment } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { SiginInSchema, SiginT } from "../../schema/zodAuth"
import Button from "../layout/common/Button"
import Input from "../layout/common/Input"
import Spinner from "../layout/common/BtnSpinner"
import AuthSucess from "../../toastify/AuthSucess"
import { useNavigate } from "react-router-dom"
function SignInDialog({
  isOpen,
  setIsOpen,
  message,
  EnableLogIn,
}: {
  isOpen: boolean
  setIsOpen: () => void
  message: string
  EnableLogIn: () => void
}) {
  const direct = useNavigate()
  const {
    register,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    handleSubmit,
    reset,
    clearErrors,
  } = useForm<SiginT>({
    resolver: zodResolver(SiginInSchema),
  })
  const SignIn: SubmitHandler<SiginT> = (FormData) => {
    if (!FormData) return
    direct("/gallery")
    setIsOpen()
  }

  return (
    <>
      {isSubmitSuccessful && (
        <AuthSucess
          isSuccess={isSubmitSuccessful}
          message="👍 you've successfuly signed In"
        />
      )}
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
          className="z-30 font-brico absolute right-1/3  bottom-44 "
          onClose={() => console.log("hello")}
          open={isOpen}
        >
          <Dialog.Panel className=" p-5 rounded-lg bg-white ">
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
                  {isSubmitting ? <Spinner /> : " Hit It"}
                </Button>
              </div>
            </form>

            <Dialog.Description className={"text-center"}>
              if you Have an Acount
              <a
                href="#"
                onClick={EnableLogIn}
                className="text-orange-300 text-mdS"
              >
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
