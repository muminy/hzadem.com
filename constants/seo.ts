import { SeoProps } from "@/components/Seo"
import { domain } from "./default"

export const initialSeo: SeoProps = {
  image: `${domain}/api/og/default`,
  title: "Hz Adem ile dinimizi öğreniyoruz",
  description: "Hz Adem ile dinimizi öğreniyoruz",
  twitter: {
    site: "@hzademcom",
    cardType: "summary_large_image",
  },
}
