import { MenuType } from "@/types/index"
import classNames from "classnames"

import { FooterProps } from "."
import Container from "../Container"
import Logo from "../Logo"
import Permalink from "../Permalink"
import Repeater from "../Repeater"

export default function Footer({
  className,
  ...remainingProps
}: FooterProps) {
  const footerMenu = [
    { href: "/hakkimizda", title: "Hakkımızda" },
    { href: "/gizlilik-politikasi", title: "Gizlilik Politikası" },
    { href: "/iletisim", title: "İletişim" },
  ]

  const renderLink = (item: MenuType, key: number) => {
    return (
      <Permalink
        key={key}
        className="hover:text-blue-500 font-semibold dark:text-white dark:hover:text-blue-500 text-gray-900 duration-200"
        title={item.title}
        href={item.href}
      />
    )
  }

  return (
    <Container
      {...remainingProps}
      className={classNames(
        "mt-auto",
        "dark:bg-dark-secondary bg-gray-100 mb-0 rounded-none",
        "p-10 flex flex-wrap space-y-5",
        "2xl:mb-10 2xl:rounded-3xl"
      )}
    >
      <div className="flex flex-col items-center w-full">
        <Logo className="mb-4" />
        <div className="text-sm font-medium text-center max-w-xl dark:text-gray-400 text-gray-600">
          Misyonumuz, okuyuculara İslami inançlar ve uygulamalar, Müslüman
          tarihi, İslam sanatı ve kültürü ve güncel olaylar dahil olmak
          üzere çeşitli konularda kapsamlı ve güncel içerik sağlamaktır.
        </div>
      </div>
      <Repeater<MenuType>
        className="flex space-x-4 justify-center items-center w-full text-sm font-medium"
        items={footerMenu}
        renderItem={renderLink}
      />
    </Container>
  )
}
