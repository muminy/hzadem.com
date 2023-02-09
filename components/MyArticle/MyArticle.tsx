import { getDate } from "@/helpers/utils"
import { PostType } from "@/types/index"
import classNames from "classnames"
import dayjs from "dayjs"
import Card from "../Card"
import Icon from "../Icon"
import Permalink from "../Permalink"

export default function MyArticle({
  title,
  image,
  slug,
  id,
  date,
}: PostType) {
  return (
    <Permalink href={`/${slug}-${id}`}>
      <div
        className={classNames(
          "text-sm p-0 rounded-tr-3xl rounded-tl-3xl",
          "flex flex-col"
        )}
      >
        <img
          className="h-[180px] object-cover rounded-xl mb-3"
          src={image}
        />
        <div className="text-gray-400 text-sm mb-2">{date}</div>
        <div className="font-semibold maxline">{title}</div>
      </div>
    </Permalink>
  )
}
