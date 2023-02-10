import classNames from "classnames"
import { MyVerseProps } from "."
import Card from "../Card"
import Permalink from "../Permalink"

export default function MyVerse({
  slug,
  title,
  description,
  id,
  className,
  isCurrent = false,
}: MyVerseProps) {
  return (
    <Permalink className={className} href={`/ayet/${slug}-${id}`}>
      <Card
        className={classNames(
          "text-sm border min-h-[160px] shadow-sm flex flex-col justify-between space-y-3",
          "hover:border-gray-600 duration-200",
          {
            "border-gray-600 items-center !justify-center space-y-6":
              isCurrent,
          }
        )}
      >
        <div
          className={classNames("text-center", {
            "max-w-lg": isCurrent,
          })}
        >
          {description}
        </div>
        <div className="text-center font-semibold">{title}</div>
      </Card>
    </Permalink>
  )
}
