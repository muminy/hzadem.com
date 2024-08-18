import Mapper from ":/components/Mapper/Mapper"
import resources from ":/resources"
import Link from "next/link"

import { WordpressCategoryType } from ":/types"

export default function DetailCategories({
  categories,
}: {
  categories: WordpressCategoryType[]
}) {
  return (
    <div>
      <h4 className="font-black mb-1 p-4 pb-0">
        {resources.categories}
      </h4>

      <Mapper
        className="p-4 flex flex-wrap gap-2"
        data={categories}
        renderEmpty={
          <div className="bg-secondary py-4 rounded-xl w-full font-semibold text-center px-4 text-sm">
            Kategori Bulunamadı
          </div>
        }
        render={(item) => (
          <Link
            className="font-semibold text-sm bg-gray-100 dark:bg-secondary py-1.5 px-3 hover:bg-black/20 duration-300 rounded-xl"
            href={`/${resources.category_path}/${item.slug}`}>
            {item.name}
          </Link>
        )}
      />
    </div>
  )
}
