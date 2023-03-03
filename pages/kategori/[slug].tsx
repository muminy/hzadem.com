import Breadcrumb from "@/components/Breadcrumb"
import Container from "@/components/Container"
import Seo from "@/components/Seo"
import Title from "@/components/Title"
import { BlogList } from "@/components/Witgets"
import { domain } from "@/constants/default"
import { getCategoryBySlug } from "@/services/category"
import { getPostCategory } from "@/services/post"
import { CategoryType, PostType } from "@/types/index"
import { GetStaticPropsContext } from "next"

type CategoryPageProps = {
  posts: PostType[]
  category: CategoryType
}

export default function Category({ posts, category }: CategoryPageProps) {
  return (
    <Container>
      <Seo
        title={category.name}
        description={`${category.name} Kategorisine ait son yazılarımız.`}
        image={category.image.sourceUrl}
      />
      <Breadcrumb
        items={[{ title: "Anasayfa", to: "/" }, { title: category.name }]}
      />
      <BlogList
        repeaterClassName="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-2"
        blogType="IMAGE"
        items={posts}
        notFound={{
          title: `Kategoriye ait yazı bulunamadı.`,
        }}
        renderHeader={
          <Title
            description={`${category.name} Kategorisine ait son yazılar.`}
            title={`${category.name}`}
          />
        }
      />
    </Container>
  )
}

export type ParamsType = {
  slug: string
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const { slug } = params as ParamsType
  const category = await getCategoryBySlug(slug)

  if (!category) {
    return {
      props: {},
      notFound: true,
    }
  }

  const posts = await getPostCategory(category.id)

  return {
    props: {
      category,
      posts,
    },
    revalidate: 10,
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  }
}
