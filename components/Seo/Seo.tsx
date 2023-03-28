import Head from "next/head"
import { SeoProps } from "."
import { useRouter } from "next/router"
import { initialSeo } from "@/constants/seo"
import { domain } from "@/constants/default"

export default function Seo(props: SeoProps) {
  const router = useRouter()

  const meta = {
    ...initialSeo,
    ...props,
  }

  const title = props.title
    ? `${props.title} | ${initialSeo.description}`
    : meta.title

  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="index,follow" />
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${domain}${router.asPath}`} />
      <link rel="canonical" href={`${domain}${router.asPath}`} />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@hzademcom" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      <meta name="keywords" content={meta.keywords} />
      <meta property="og:type" content={"website"} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={meta.image} />
      {meta.date && (
        <meta property="article:published_time" content={meta.date} />
      )}
      {meta.modified && (
        <meta property="article:modified_time" content={meta.modified} />
      )}
    </Head>
  )
}