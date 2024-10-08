import clsx from "clsx"
import { getDate } from ":/lib/utils"
import { PostProps } from ":/components/PostCards"

export default function PostDetail({
  author,
  date,
}: Pick<PostProps, "author" | "date">) {
  const Divider = () => (
    <div className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-dark-border mx-2" />
  )
  return (
    <div
      className={clsx(
        "flex items-center space-x-2",
        "font-medium mb-2 text-xs"
      )}>
      <div className="flex items-center space-x-1 truncate">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="14"
          height="14">
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            fill="currentColor"
            d="M6.94 14.036c-.233.624-.43 1.2-.606 1.783.96-.697 2.101-1.139 3.418-1.304 2.513-.314 4.746-1.973 5.876-4.058l-1.456-1.455 1.413-1.415 1-1.001c.43-.43.915-1.224 1.428-2.368-5.593.867-9.018 4.292-11.074 9.818zM17 9.001L18 10c-1 3-4 6-8 6.5-2.669.334-4.336 2.167-5.002 5.5H3C4 16 6 2 21 2c-1 2.997-1.998 4.996-2.997 5.997L17 9.001z"></path>
        </svg>
        <span>{author.node.name}</span>
      </div>
      <Divider />
      <div className="flex items-center space-x-1 truncate w-auto">
        <span>{getDate(date)}</span>
      </div>
    </div>
  )
}
