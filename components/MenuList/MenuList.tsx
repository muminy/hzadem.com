import { CategoryType } from "@/types/index"
import cn from "classnames"
import { useSiteContent } from "context/site"
import { useRouter } from "next/router"
import { MenuListProps } from "."
import Permalink from "../Permalink"
import Repeater from "../Repeater"

export default function MenuList({ isResponsive }: MenuListProps) {
  const { menu } = useSiteContent()
  const { asPath } = useRouter()

  const renderMenu = (item: CategoryType, isResponsive = false) => {
    const isActive = `/kategori/${item.slug}` === asPath
    return (
      <li key={item.slug}>
        <Permalink
          className={cn(
            "px-3 py-2.5 rounded-2xl duration-200 text-white",
            "font-bold text-sm hover:bg-dark-secondary",
            {
              "bg-dark-secondary": isActive,
              "px-0 h-8 py-0 text-white !bg-transparent": isResponsive,
            }
          )}
          href={`/kategori/${item.slug}`}
          title={item.name}
        />
      </li>
    )
  }

  return (
    <Repeater<CategoryType>
      items={menu}
      as="ul"
      renderItem={(item) => renderMenu(item, isResponsive)}
      className={cn({
        "hidden xl:flex lg:flex items-center space-x-1": !isResponsive,
        "flex-col block": isResponsive,
      })}
    />
  )
}
