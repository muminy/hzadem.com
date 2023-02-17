import { SeoProps } from "@/components/Seo"
import { domain } from "./default"

export const initialSeo: SeoProps = {
  image: `${domain}/api/og/default`,
  title: "Hz Adem | Kur'an ışığında Kur'an'a Dair Her Şey!",
  description: "Kur'an ışığında Kur'an'a Dair Her Şey!",
  twitter: {
    site: "@hzademcom",
    cardType: "summary_large_image",
  },
}
