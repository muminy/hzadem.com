import { WordpressCategoryType } from ":/types"
import SheetHeader from "../SheetHeader"
import Mapper from ":/components/Mapper/Mapper"
import Link from "next/link"
import resources from ":/resources"

export default function ResponsiveMenu({
  menu,
}: {
  menu: WordpressCategoryType[]
}) {
  return (
    <div className="p-5">
      <Mapper
        data={menu}
        renderHeader={<SheetHeader />}
        className="flex flex-col gap-y-2 mt-5"
        render={(item) => (
          <Link
            className="font-black bg-secondary py-2.5 px-4 rounded-xl flex justify-between items-center"
            href={`/${resources.category_path}/${item.slug}`}>
            {item.name}
            <div className="w-10 h-10 center-center bg-background rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={16}
                height={16}
                fill="currentColor">
                <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
              </svg>
            </div>
          </Link>
        )}
      />
    </div>
  )
}
