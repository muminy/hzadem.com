import { config } from ":/constants/site"
import type { Metadata } from "next"

const defaultSeo = {
  image: `${config.domain}/images/default.jpeg`,
  title: "hzadem.com | Kuran ışığında Kurana Dair Her Şey!",
  description: "Kuran ışığında Kurana Dair Her Şey!",
  keywords:
    "Kuran, hz adem, peygamber efendimiz, islam, hzadem kimdir, hzadem'in hayatı",
  twitter: {
    site: "@hzademcom",
  },
}

export interface GenerateSeoProp extends Metadata {
  image?: string
  url?: string
  title?: string
  description?: string
  keywords?: string
}

export async function generateSeo({
  title = defaultSeo.title,
  description = defaultSeo.description,
  image = defaultSeo.image,
  url = config.domain,
  authors,
  twitter = defaultSeo.twitter,
  openGraph,
  keywords = defaultSeo.keywords,
  ...props
}: GenerateSeoProp): Promise<Metadata> {
  return {
    title: title,
    description: description,
    authors,
    keywords: keywords,

    twitter: {
      images: image,
      card: "summary_large_image",
      title: title,
      description: description,
      ...twitter,
    },
    openGraph: {
      description: description,
      title: title,
      images: image,
      type: "article",
      locale: url,
      url,
      siteName: config.domain,
      ...openGraph,
    },
    ...props,
  }
}

export const NotFoundMetaData = {
  title: "Bulamadık",
  robots: {
    follow: false,
    index: false,
  },
}
