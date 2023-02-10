import Head from "next/head"
import { SeoProps } from "."
import { useRouter } from "next/router"
import { initialSeo } from "@/constants/seo"

export default function Seo(props: SeoProps) {
  const router = useRouter()

  const meta = {
    ...initialSeo,
    ...props,
  }

  const description =
    "HZ Adem Burada sizlere islamiyet hakkında açıklayıyıcı yazılar ve kur'an içerisinden ayetler paylaşıyoruz. Dinimiz daha net öğrenebilir ve paylaşabilirsiniz."

  const contentDescription = props.description ?? description
  const image = props.image ?? meta.image

  const title = props.title
    ? `${props.title} | ${description}`
    : meta.title

  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={meta.description} />
      <meta
        property="og:url"
        content={`https://hzadem.com${router.asPath}`}
      />
      <link rel="canonical" href={`https://hzadem.com${router.asPath}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@hzadem" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={contentDescription} />
      <meta name="twitter:image" content={image} />
      <meta property="og:type" content={"website"} />
      <meta property="og:site_name" content="Hzadem" />
      <meta property="og:description" content={contentDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      {meta.date && (
        <meta property="article:published_time" content={meta.date} />
      )}
    </Head>
  )
}
