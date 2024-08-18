import Container from ":/components/Container/Container"
import Mapper from ":/components/Mapper/Mapper"
import LinePost from ":/components/PostCards/LinePost"
import MyTitle from ":/components/Title/Title"
import { config } from ":/constants/site"
import { generateSeo } from ":/lib/metadata"
import { getPostImage } from ":/lib/utils"
import { getCategoryBySlug } from ":/services/category"
import { getPostCategory } from ":/services/posts"

export interface CategoryPageProps {
  params: { slug: string }
}

export const revalidate = 60

export async function generateMetadata({
  params,
}: CategoryPageProps) {
  const category = await getCategoryBySlug(params.slug)

  return generateSeo({
    title: `${category.name} | hzadem.com`,
    description: `${category.name} kategorisine ait yazılar`,
    url: `${config.domain}/${category.slug}`,
    image: getPostImage(category.image.node.sourceUrl),
    openGraph: {
      type: "article",
    },
  })
}

export default async function CategoryPosts({
  params,
}: CategoryPageProps) {
  const category = await getCategoryBySlug(params.slug)
  const posts = await getPostCategory(category.categoryId)

  return (
    <div className="bg-secondary pb-10">
      <Container>
        <MyTitle title={category.name} />
        <Mapper
          data={posts}
          className="grid gap-5"
          render={(item) => <LinePost {...item} />}
        />
      </Container>
    </div>
  )
}
