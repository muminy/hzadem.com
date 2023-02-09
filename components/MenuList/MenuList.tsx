import { MenuType } from "@/types/index"
import cn from "classnames"
import { useRouter } from "next/router"
import { MenuListProps } from "."
import Permalink from "../Permalink"
import Repeater from "../Repeater"

export default function MenuList({ isResponsive }: MenuListProps) {
  const { asPath } = useRouter()

  const menuList: MenuType[] = [
    { href: "/", title: "Anasayfa" },
    { href: "/islam", title: "İslam" },
    { href: "/dua", title: "Dualar" },
    { href: "/ayet", title: "Ayetler" },
    { href: "/hadis", title: "Hadisler" },
    { href: "/sunnet", title: "Sünnet" },
  ]

  const renderMenu = (item: MenuType, isResponsive = false) => {
    const isActive = `/kategori/${item.href}` === asPath
    return (
      <li key={item.href}>
        <Permalink
          className={cn(
            "px-3 py-2.5 rounded-2xl duration-200",
            "font-bold text-sm",
            {
              "bg-gray-100 dark:bg-dark-secondary": isActive,
              "px-0 h-8 py-0 text-white !bg-transparent": isResponsive,
              "hover:dark:bg-dark-secondary hover:bg-gray-100 text-black dark:text-white":
                !isResponsive,
            }
          )}
          href={`/kategori/${item.href}`}
          title={item.title}
        />
      </li>
    )
  }

  return (
    <Repeater<MenuType>
      items={menuList}
      as="ul"
      renderItem={(item) => renderMenu(item, isResponsive)}
      className={cn({
        "hidden xl:flex lg:flex items-center": !isResponsive,
        "flex-col block": isResponsive,
      })}
    />
  )
}
