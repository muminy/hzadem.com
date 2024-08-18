import Link from "next/link"
import { PostProps } from "."
import style from "./Post.module.css"
import clsx from "clsx"
import { getDate, getPostImage } from ":/lib/utils"
import resources from ":/resources"

export default function LinePost({
  title,
  excerpt,
  slug,
  date,
  featuredImage,
  commentCount,
  author,
}: PostProps) {
  return (
    <Link
      className={clsx(
        "duration-200 flex px-6 py-8 relative bg-background min-h-48",
        "h-full flex flex-col justify-center overflow-hidden",
        "hover:ring-2 hover:ring-offset-4 rounded-xl hover:ring-offset-secondary hover:ring-gray-300",
        "hover:dark:ring-offset-secondary hover:dark:ring-background"
      )}
      href={`/${resources.post_detail_path}/${slug}`}>
      <div className={clsx(style.defaultCard, "space-y-3")}>
        <h2 className="font-bold maxline text-2xl">{title}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: excerpt }}
          className="line-clamp-3"
        />
        <div className="flex gap-4 flex-wrap">
          <span className="text-xs font-semibold bg-gray-100 dark:bg-secondary rounded-xl px-2 py-1 inline-block">
            {getDate(date)}
          </span>
          <div className="bg-gray-100 dark:bg-secondary px-2 py-1 rounded-xl text-xs font-semibold">
            {commentCount ?? 0} {resources.comment}
          </div>
          <div className="bg-gray-100 dark:bg-secondary px-2 py-1 rounded-xl text-xs font-semibold">
            {author.node.name}
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${getPostImage(featuredImage)})`,
        }}
        className={style.blogDefault}
      />
    </Link>
  )
}
