import classNames from "classnames"
import { CardProps } from "."

export default function Card({ className, ...props }: CardProps) {
  return (
    <div
      {...props}
      className={classNames("bg-white p-4 rounded-xl", className)}
    />
  )
}
