import { ComponentProps } from "react"

type svgProps = {
  onCheck: () => void
  isChecked: boolean
} & ComponentProps<"svg">

function Check({ isChecked, onCheck, ...props }: svgProps) {
  return (
    <svg
      onClick={onCheck}
      xmlns="http://www.w3.org/2000/svg"
      fill={isChecked ? "orange" : "none"}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="white"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  )
}

export default Check
