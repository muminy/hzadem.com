import dayjs from "dayjs"
import { MetadataRoute } from "next"
import { config } from ":/constants/site"
import { getPosts } from ":/services/posts"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { posts } = await getPosts(1000)

  const postMaps = posts.map((item) => ({
    url: `${config.domain}/detay/${item.slug}`,
    lastModified: dayjs(item.date).format("YYYY-MM-DD"),
  }))

  return [
    {
      url: config.domain,
      lastModified: "2023-01-03",
    },
    ...postMaps,
  ]
}
