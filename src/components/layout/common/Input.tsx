import { ComponentProps, forwardRef } from "react"
import { FieldError } from "react-hook-form"
type InputProps = {
  type: "search" | "text" | "password" | "email"
  placeHolder: string
  errors?: FieldError | undefined
} & ComponentProps<"input">

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeHolder, errors, type, ...props }, ref) => {
    return (
      <>
        {errors && <span className="text-red-500">{errors?.message}</span>}
        <input ref={ref} type={type} placeholder={placeHolder} {...props} />
      </>
    )
  },
)

export default Input
