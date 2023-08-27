import { ComponentProps, ReactNode } from "react"

type MainProps = {
  children: ReactNode
} & ComponentProps<"main">

function Main({ children, ...props }: MainProps) {
  return <main {...props}>{children}</main>
}

export default Main
