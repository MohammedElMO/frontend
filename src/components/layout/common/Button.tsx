import { ComponentProps, ReactNode, forwardRef } from "react"
type ButtonProps = {
  children: ReactNode
} & ComponentProps<"button">

const Button = forwardRef<HTMLButtonElement,ButtonProps>(({children,...props},ref) => {
  return (
    <button ref={ref} {...props}>
      {children}
    </button>
  )
})

export default Button
