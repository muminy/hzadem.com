import Container from ":/components/Container/Container"
import Mapper from ":/components/Mapper/Mapper"
import { generateSeo } from ":/lib/metadata"
import Link from "next/link"

export type ContactType = {
  placeholder?: string
  title: string
  href: string
}

export async function generateMetadata() {
  return generateSeo({ title: "İletişim" })
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
      <Link
        href={item.href}
        key={key}
        className="flex items-center space-x-2 text-sm bg-background dark:bg-dark-secondary py-3 px-4 rounded-xl border">
        <div className="font-semibold">
          {item.placeholder ?? item.title}
        </div>
      </Link>
    )
  }
  return (
    <Container className="rounded-xl py-10">
      <h1 className="font-black text-2xl mb-5">
        Bizimle İletişime geçin
      </h1>
      <Mapper
        className="flex flex-col items-baseline space-y-2"
        data={contacts}
        render={renderItem}
      />
    </Container>
  )
}
