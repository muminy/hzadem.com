import { QUERY_TAG_BY_SLUG } from ":/graphql/tag"
import client from ":/lib/apollo"
import { WordpressTagNode } from ":/types"
import { notFound } from "next/navigation"

export async function getTagBySlug(slug: string) {
  try {
    const response = await client.query<WordpressTagNode>({
      query: QUERY_TAG_BY_SLUG,
      variables: { slug },
    })

    if (!response.data.tag) {
      notFound()
    }

    return response.data.tag
  } catch (e) {
    notFound()
  }
}
