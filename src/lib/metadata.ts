import { PostProps } from ":/components/PostCards"
import { config } from ":/constants/site"
import type { Metadata } from "next"
import { getPostImage, removeHtmlTags } from "./utils"
import type { BreadcrumbType } from ":/components/Breadcrumb"

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

export const getBlogJsonLD = (post: PostProps) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: post.title,
  description: removeHtmlTags(post.excerpt),
  author: {
    "@type": "Person",
    name: post.author.node.name,
  },
  datePublished: post.date,
  image: getPostImage(post.featuredImage),
})

export const getBreadcrumJsonLD = (
  crumbs: BreadcrumbType[]
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((item, key) => ({
    "@type": "ListItem",
    position: key + 1,
    name: item.title,
    item: `${config.domain}${item.to}`,
  })),
})

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "HzAdem",
  url: config.domain,
}
