import classNames from "classnames"
import { BlogMenuProps } from "."
import Icon from "../Icon"
import Repeater from "../Repeater"
import { BlogMenuTypes } from "../Sections"

type ListType = Record<"name", BlogMenuTypes>

export default function BlogMenu({ getMenu, menu }: BlogMenuProps) {
  const menuList: ListType[] = [
    { name: BlogMenuTypes.ALL },
    { name: BlogMenuTypes.HADIS },
    { name: BlogMenuTypes.SUNNET },
  ]

  const renderBlogMenu = (item: ListType, index: number) => {
    return (
      <button
        key={index}
        className={classNames(
          "font-semibold",
          "px-3 py-2",
          "rounded-xl text-[15px]",
          "hover:bg-gray-100 duration-200",
          { "bg-gray-100": menu === item.name }
        )}
        onClick={() => getMenu(item.name)}
        title={item.name}
      >
        {item.name}
      </button>
    )
  }

  return (
    <div className="flex items-center space-x-4 mb-5">
      <Repeater<ListType>
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
