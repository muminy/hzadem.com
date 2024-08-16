import Link from "next/link"
import style from "./Header.module.css"
import { WordpressCategoryType } from ":/types"
import clsx from "clsx"

export interface MenuLinkProps {
  href: string
  title: string
}

export default function MenuLink({
  slug,
  name,
}: WordpressCategoryType) {
  return (
    <Link
      className={clsx(
        style.menu,
        "hover:dark:bg-secondary dark:border-b-background hover:dark:border-white/20"
      )}
      href={`/kategori/${slug}`}>
      {name}
    </Link>
  )
}
