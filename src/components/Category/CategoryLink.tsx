import resources from ":/resources"
import { WordpressCategoryType } from ":/types"
import clsx from "clsx"
import { replace } from "lodash"
import Link from "next/link"

export default function CategoryLink({
  count,
  name,
  slug,
}: WordpressCategoryType) {
  return (
    <Link
      className={clsx(
        "px-4 py-2 bg-secondary rounded-xl duration-300",
        "relative h-16 flex items-center group gap-x-2",
        "hover:ring-2 ring-black ring-offset-white ring-offset-2",
        "dark:ring-offset-background dark:ring-white/20"
      )}
      href={`/${resources.category_path}/${slug}`}>
      <div className="w-8 h-8 bg-black/10 rounded-full center-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={16}
          height={16}
          fill="currentColor">
          <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
        </svg>
      </div>
      <div>
        <h3 className="font-semibold text-sm">{name}</h3>
        <div className="text-xs font-medium text-gray-500">
          {replace(
            resources.total_content,
            "{count}",
            `${count}`
          )}
        </div>
      </div>
    </Link>
  )
}
