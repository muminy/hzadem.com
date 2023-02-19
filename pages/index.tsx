import Container from "@/components/Container"
import Seo from "@/components/Seo"
import Title from "@/components/Title"
import { CategoryList, TextList } from "@/components/Witgets"
import { BlogList } from "@/components/Witgets"
import { initialSeo } from "@/constants/seo"
import { getAllPosts } from "@/services/post"
import { PostType } from "../types"

type HomeStaticProps = {
  hero: PostType[]
  remaining: PostType[]
}

export default function Home({ hero, remaining }: HomeStaticProps) {
  return (
    <Container>
      <Seo {...initialSeo} />
      <CategoryList />
      <BlogList
        repeaterClassName="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 gap-2"
        blogType="IMAGE"
        renderHeader={
          <Title
            description="Gün içerisinde yazılmış yazılar burada listelenmektedir"
            title="Son Yazılar"
          />
        }
        className="mb-10"
        items={hero}
      />
      <BlogList
        items={remaining}
        renderHeader={<Title description="" title="Diğer" />}
        notFound={{
          title: "Yeni yazılar bulunamadı",
          description:
            "Yazılar en kısa sürede burada listelenecektir. Lütfen bizleri takip etmeyi unutmayınız",
        }}
        repeaterClassName="grid xl:grid-cols-2 grid-cols-1 gap-5"
      />
    </Container>
  )
}

export async function getStaticProps() {
  const { hero, remaining } = await getAllPosts()

  return {
    props: {
      hero,
      remaining,
    },
    revalidate: 10,
  }
}
