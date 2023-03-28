import { SeoProps } from "@/components/Seo"
import { domain } from "./default"

export const initialSeo: SeoProps = {
  image: `${domain}/api/og/default`,
  title: "HzAdem.com",
  description: "Kur'an ışığında Kur'an'a Dair Her Şey!",
  keywords: "Kuran, hz adem, peygamber efendimiz, islam",
  twitter: {
    site: "@hzademcom",
    cardType: "summary_large_image",
  },
}