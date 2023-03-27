import Container from "@/components/Container"
import Icon from "@/components/Icon"
import Repeater from "@/components/Repeater"
import Seo from "@/components/Seo"
import { MenuType } from "../types"

export type ContactType = MenuType & {
  placeholder?: string
}

export default function Contact() {
  const contacts = [
    {
      href: "https://twitter.com/hzademcom",
      title: "Twitter",
    },
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
        className="flex items-center space-x-2 text-sm bg-gray-100 dark:bg-dark-secondary py-3 px-4 rounded-xl"
      >
        <div className="font-semibold">
          {item.placeholder ?? item.title}
        </div>
        <Icon size={16} icon={"external"} />
      </a>
    )
  }
  return (
    <Container size="large">
      <Seo title="İletişim" />
      <h1 className="my-10 font-black text-2xl">
        Bizimle İletişime geçin
      </h1>

      <Repeater<ContactType>
        className="flex flex-col items-baseline space-y-2"
        items={contacts}
        renderItem={renderItem}
      />
    </Container>
  )
}
