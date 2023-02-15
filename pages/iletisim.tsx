import Breadcrumb from "@/components/Breadcrumb"
import Container from "@/components/Container"
import Icon from "@/components/Icon"
import Permalink from "@/components/Permalink"
import Repeater from "@/components/Repeater"
import Seo from "@/components/Seo"
import classNames from "classnames"
import { MenuType } from "../types"

export type ContactType = MenuType & {
  placeholder?: string
}

export default function Iletisim() {
  const contacts = [
    { href: "https://twitter.com/hzademcom", title: "Twitter" },
    {
      href: "mailto:help@codejs.dev",
      title: "Email",
      placeholder: "help@codejs.dev",
    },
  ]

  const renderItem = (item: ContactType, key: number) => {
    return (
      <a
        href={item.href}
        key={key}
        className={classNames(
          "flex items-center space-x-2 text-sm py-3 px-4 rounded-xl",
          "bg-gray-100 dark:bg-dark-secondary"
        )}
      >
        <div>{item.placeholder ?? item.title}</div>
        <Icon size={16} icon="external" />
      </a>
    )
  }
  return (
    <Container size="large" className="article-content">
      <Seo title="İletişim" description="hzadem.com iletişim bilgileri" />
      <Breadcrumb
        items={[{ title: "Anasayfa", to: "/" }, { title: "İletişim" }]}
      />
      <h1>İletişim Adreslerimiz</h1>

      <Repeater<ContactType>
        className="flex flex-col items-baseline space-y-2"
        items={contacts}
        renderItem={renderItem}
      />
    </Container>
  )
}
