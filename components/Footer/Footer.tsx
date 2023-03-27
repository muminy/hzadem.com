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
  const contacts: MenuType[] = [
    { href: "/gizlilik-politikasi", title: "Gizlilik Politikası" },
    { href: "/hakkimizda", title: "Hakkımızda" },
    { href: "/iletisim", title: "İletişim" },
  ]

  const renderFooterLink = (item: MenuType, index: number) => (
    <Permalink
      className={classNames(
        "dark:text-white text-sm",
        "hover:dark:text-blue-500 duration-300"
      )}
      key={index}
      href={item.href}
      title={item.title}
    />
  )

  return (
    <Container size="big" className="xl:px-5 px-0 !mt-auto">
      <div
        {...remainingProps}
        className={classNames(
          "dark:bg-dark-secondary bg-gray-200 p-10 flex flex-col items-center grid-cols-12 space-y-5 justify-center",
          "xl:mb-10 xl:rounded-3xl"
        )}
      >
        <div className="space-y-2 flex flex-col justify-center text-gray-900 dark:text-white items-center">
          <Logo size={24} />
          <p className="text-sm xl:w-2/4 mx-auto text-center dark:text-gray-300 text-gray-500">
            Misyonumuz, okuyuculara İslami inançlar ve uygulamalar,
            Müslüman tarihi, İslam sanatı ve kültürü ve güncel olaylar
            dahil olmak üzere çeşitli konularda kapsamlı ve güncel içerik
            sağlamaktır.
          </p>
        </div>

        <Repeater<MenuType>
          items={contacts}
          className="flex items-center space-x-3"
          renderItem={renderFooterLink}
        />
      </div>
    </Container>
  )
}