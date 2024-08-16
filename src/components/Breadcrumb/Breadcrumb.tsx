import Link from "next/link"
import style from "./style.module.css"
import Mapper from ":/components/Mapper/Mapper"
import clsx from "clsx"
import { BreadCrumbProps, BreadcrumbType } from "."

export default function Breadcrumb({ items }: BreadCrumbProps) {
  return (
    <Mapper<BreadcrumbType>
      data={items}
      className={style.breadcrumbs}
      render={(item, index) =>
        item.to ? (
          <Link className="font-semibold" href={item.to}>
            {item.title}
          </Link>
        ) : (
          <div className="text-sm font-medium">{item.title}</div>
        )
      }
    />
  )
}
