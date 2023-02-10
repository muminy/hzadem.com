import { PostType } from "@/types/index"
import classNames from "classnames"
import Permalink from "../Permalink"

export default function MyArticle({
  title,
  image,
  slug,
  id,
  date,
  description,
  tags,
}: PostType) {
  return (
    <Permalink href={`/${slug}-${id}`}>
      <div
        className={classNames(
          "text-sm p-4 border shadow-sm rounded-3xl",
          "flex flex-col hover:border-gray-600 duration-300"
        )}
      >
        <img
          className="h-[180px] object-cover rounded-3xl mb-3 rounded-bl-lg rounded-br-lg"
          src={image}
        />
        <div className="font-semibold truncate mb-2">{title}</div>
        <div className="maxline text-gray-500 mb-1">{description}</div>
        <div className="text-gray-400 text-xs mb-2">{date}</div>
      </div>
    </Permalink>
  )
}
