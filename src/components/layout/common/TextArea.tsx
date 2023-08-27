import { forwardRef } from "react"
import { FieldError } from "react-hook-form"

type AreaProps = {
  errors: FieldError | undefined
  placeHolder: string
  rows: number
  cols: number
  className:string
}
const Area = forwardRef<HTMLTextAreaElement, AreaProps>(
  ({ placeHolder,className,cols, errors, rows, ...props }, ref) => {
    return (
      <>
        {errors && <span className="text-red-500">{errors?.message}</span>}
        <textarea
          ref={ref}
          rows={rows}
          cols={cols}
          placeholder={placeHolder}
          className={className}
          {...props}
        ></textarea>
      </>
    )
  },
)

export default Area
