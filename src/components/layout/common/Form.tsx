import { ComponentProps, ReactNode } from "react"

type FormProps = {
  children: ReactNode
} & ComponentProps<"form">

function Form({ children, ...props }: FormProps) {
  return <form {...props}>{children}</form>
}

export default Form
