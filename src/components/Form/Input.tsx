import React, { forwardRef } from "react"
import clsx from "clsx"

export interface InputProps
  extends React.HTMLProps<HTMLInputElement> {
  label: string
  className?: string
  hasError?: boolean
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, hasError, ...props }, ref) => {
    return (
      <label className={clsx(className, "flex flex-col")}>
        <span className="font-semibold text-sm mb-2">
          {label}
        </span>
        <input
          ref={ref}
          className={clsx(
            "bg-gray-100 px-4 py-4 rounded-lg",
            "hover:bg-gray-200 focus:bg-gray-200 duration-300",
            "focus:ring-2 ring-offset-2 ring-gray-200",
            "dark:bg-secondary focus:dark:ring-offset-background focus:ring-secondary",
            { "ring-2 !ring-red-500": hasError }
          )}
          {...props}
        />
      </label>
    )
  }
)
Input.displayName = "Input"
export default Input
