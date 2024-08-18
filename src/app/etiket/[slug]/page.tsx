import Container from ":/components/Container/Container"
import Mapper from ":/components/Mapper/Mapper"
import LinePost from ":/components/PostCards/LinePost"
import MyTitle from ":/components/Title/Title"
import { generateSeo } from ":/lib/metadata"
import { getPostByTag } from ":/services/posts"
import { getTagBySlug } from ":/services/tag"

export interface TagPageProps {
  params: { slug: string }
}

export const revalidate = 60

export async function generateMetadata({
  params,
}: TagPageProps) {
  const tag = await getTagBySlug(params.slug)

  return generateSeo({
    title: `${tag.name} | hzadem.com`,
    description: `${tag.name} etiketine ait yazılar`,
    robots: {
      follow: false,
      index: false,
    },
  })
}

export default async function TagPosts({
  params,
}: TagPageProps) {
  const tag = await getTagBySlug(params.slug)
  const posts = await getPostByTag(params.slug)

  return (
    <div className="bg-secondary pb-10">
      <Container>
        <MyTitle title={tag.name} />
        <Mapper
          data={posts}
          className="grid gap-5"
          render={(item) => <LinePost {...item} />}
        />
      </Container>
    </div>
  )
}
