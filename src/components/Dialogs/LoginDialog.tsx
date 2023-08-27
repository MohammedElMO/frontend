import { Dialog, Transition } from "@headlessui/react"
import Button from "../layout/common/Button"
import Input from "../layout/common/Input"
import { Fragment } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginSchemaZod, LoginT } from "../../schema/zodAuth"
import { useNavigate } from "react-router-dom"
function LoginDialog({
  isOpen,
  setIsOpen,
  message,
}: {
  isOpen: boolean
  setIsOpen: () => void
  message: string
}) {
  const direct = useNavigate()
  const {
    register,
    formState: { errors, isSubmitted },
    handleSubmit,
    reset,
    clearErrors,
  } = useForm<LoginT>({
    resolver: zodResolver(LoginSchemaZod),
  })

  const LogIn: SubmitHandler<LoginT> = (data) => {
    if (!data) return
    console.log(data)
  }

  return (
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
            onSubmit={handleSubmit(LogIn)}
            className="flex flex-col mb-3 gap-3"
          >
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
                onClick={() => {
                  if (isSubmitted) direct("/liked")
                }}
                type="submit"
                className="bg-orange-300  transition-colors text-black rounded p-3"
              >
                Hit It
              </Button>
            </div>
          </form>

          <Dialog.Description>
            if you don't an have an Acount
            <a href="" className="text-orange-300 text-mdS">
              {"  "}
              signin?
            </a>
          </Dialog.Description>
        </Dialog.Panel>
      </Dialog>
    </Transition>
  )
}

export default LoginDialog
