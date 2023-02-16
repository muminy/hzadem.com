import classNames from "classnames"
import { TagType } from "."
import Permalink from "../Permalink"

export default function Badge({ text, className, slug }: TagType) {
  return (
    <Permalink
      href={`/kategori/${slug}`}
      title={text}
      className={classNames(
        "px-3 rounded-xl text-sm h-8 font-bold",
        "bg-gray-100 dark:text-black",
        "flex items-center",
        className
      )}
    />
  )
}
