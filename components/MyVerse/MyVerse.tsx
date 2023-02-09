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
          "text-sm border h-[160px] shadow-sm flex flex-col justify-between",
          {
            "border-gray-800 items-center !justify-center space-y-3":
              isCurrent,
          }
        )}
      >
        <div className={classNames({ "max-w-lg text-center": isCurrent })}>
          {isCurrent ? description : description.substring(0, 120)}
        </div>
        <div className="text-right font-semibold">{title}</div>
      </Card>
    </Permalink>
  )
}
