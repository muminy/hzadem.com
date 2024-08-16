import clsx from "clsx"
import Link from "next/link"
import { PostProps } from "."
import { getDate } from ":/lib/utils"
import resources from ":/resources"

export default function TrendPostCard({
  title,
  date,
  slug,
}: PostProps) {
  return (
    <Link
      href={`/${resources.post_detail_path}/${slug}`}
      className={clsx(
        "hover:bg-gray-200 dark:hover:bg-white/10 block duration-300 bg-secondary",
        "rounded-xl px-4 py-3 font-semibold text-sm leading-5 space-y-1",
        "hover:ring-2 ring-black ring-offset-white ring-offset-2 dark:ring-offset-background dark:ring-white/20"
      )}>
      <h2>{title}</h2>
      <div className="font-medium text-xs">{getDate(date)}</div>
    </Link>
  )
}
