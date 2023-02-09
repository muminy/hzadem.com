import { MenuType } from "@/types/index"
import classNames from "classnames"
import Icon from "../Icon"
import MyTitle from "../MyTitle"
import Permalink from "../Permalink"
import Repeater from "../Repeater"

export default function BlogMenu() {
  const menuList: MenuType[] = [
    { href: "/islam", title: "Tümü" },
    { href: "/dua", title: "Dualar" },
    { href: "/hadis", title: "Hadisler" },
    { href: "/sunnet", title: "Sünnet" },
  ]

  const renderBlogMenu = (item: MenuType, index: number) => {
    return (
      <button
        key={index}
        className={classNames(
          "font-semibold",
          "first:bg-gray-100 px-3 py-2",
          "rounded-xl text-[15px]",
          "hover:bg-gray-100 duration-200"
        )}
        title={item.title}
      >
        {item.title}
      </button>
    )
  }

  return (
    <div className="flex items-center space-x-4 mb-5">
      <Repeater<MenuType>
        items={menuList}
        className="flex items-center space-x-0.5"
        renderItem={renderBlogMenu}
      />
      <label
        className={classNames(
          "flex items-center space-x-2",
          "text-slate-500 focus-within:text-black placeholder:text-slate-500",
          "xl:flex lg:flex hidden"
        )}
      >
        <Icon size={16} icon="search" />
        <input
          placeholder="Blog içerisinde ara"
          className={classNames(
            "bg-transparent outline-none py-2 text-[15px]",
            "text-black"
          )}
        />
      </label>
    </div>
  )
}
