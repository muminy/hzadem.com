import Breadcrumb from ":/components/Breadcrumb"
import Container from ":/components/Container/Container"
import DetailHeader from "./components/detail-header"
import DetailContent from "./components/detail-content"
import DetailComment from "./components/detail-comment"

import { getPostBySlug } from ":/services/posts"
import {
  generateSeo,
  getBlogJsonLD,
  getBreadcrumJsonLD,
  websiteSchema,
} from ":/lib/metadata"
import { config } from ":/constants/site"
import { getPostImage, removeHtmlTags } from ":/lib/utils"
import LeftSidebar from "./components/detail-left-sidebar"
import { get, has } from "lodash"
import resources from ":/resources"

export interface BlogDetailProps {
  params: { slug: string }
}

export const revalidate = 60

export async function generateMetadata({
  params,
}: BlogDetailProps) {
  const post = await getPostBySlug(params.slug)

  return generateSeo({
    title: post.title,
    description: removeHtmlTags(post.excerpt),
    url: `${config.domain}/${post.slug}`,
    image: getPostImage(post.featuredImage),
    openGraph: {
      type: "article",
      publishedTime: post.date,
    },
  })
}

export default async function BlogDetail({
  params,
}: BlogDetailProps) {
  const data = await getPostBySlug(params.slug)
  const category = get(data, "categories.nodes[0]")

  const getBreadcrumbs = () => {
    const breadcrumb = [{ title: "Anasayfa", to: "/" }]

    if (has(category, "name")) {
      breadcrumb.push({
        title: category.name,
        to: `/${resources.category_path}/${category.slug}`,
      })
    }

    return [
      ...breadcrumb,
      {
        title: data.title,
        to: `/${resources.index}/${data.slug}`,
      },
    ]
  }

  return (
    <Container className="py-10">
      <Breadcrumb items={getBreadcrumbs()} />
      <section className="grid grid-cols-12 overflow-hidden gap-x-5 rounded-xl">
        <div className="xl:col-span-9 rounded-xl col-span-12 xl:p-10 p-5 bg-background">
          <DetailHeader {...data} />
          <DetailContent content={data.content} />
          <DetailComment
            postId={data.postId}
            comments={data.comments}
          />
        </div>
        <div className="col-span-3 xl:block hidden">
          <LeftSidebar {...data} />
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              getBlogJsonLD(data),
              getBreadcrumJsonLD(getBreadcrumbs()),
              websiteSchema,
            ],
          }),
        }}
      />
    </Container>
  )
}
