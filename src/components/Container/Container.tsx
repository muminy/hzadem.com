import cn from "clsx"

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {}
export default function Container({
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      {...props}
      className={cn(
        "container max-w-[1300px] mx-auto relative px-4",
        className
      )}
    />
  )
}
