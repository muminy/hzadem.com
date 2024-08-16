import clsx from "clsx"

export enum BgColorTypes {
  DARK = "DARK",
  DEFAULT = "DEFAULT",
  PRIMARY = "PRIMARY",
}

export type ButtonProps =
  React.HTMLAttributes<HTMLButtonElement> & {
    text: string
    isLoading?: boolean
    bgColor?: keyof typeof BgColorTypes
  }

export default function Button({
  text,
  isLoading,
  bgColor = BgColorTypes.DEFAULT,
  className,
  ...props
}: ButtonProps) {
  const style = {
    [BgColorTypes.DARK]:
      "bg-black text-white dark:text-black dark:bg-background",
    [BgColorTypes.DEFAULT]: "bg-gray-200 dark:bg-dark-secondary",
    [BgColorTypes.PRIMARY]: "bg-blue-600 text-white",
  }

  return (
    <button
      className={clsx(
        "px-10 py-4 text-wrap font-semibold rounded-3xl disabled:bg-opacity-35",
        style[bgColor]
      )}
      {...props}
      disabled={isLoading}>
      {text}
    </button>
  )
}
