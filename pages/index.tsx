import Container from "@/components/Container"
import Seo from "@/components/Seo"
import Title from "@/components/Title"
import { CategoryList } from "@/components/Witgets"
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
    <Container size="big">
      <Seo {...initialSeo} />

      <div className="grid xl:grid-cols-3 xl:gap-x-20 gap-x-5 grid-cols-1 dark:divide-dark-border">
        <div className="col-span-2 py-5">
          <BlogList
            repeaterClassName="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4"
            blogType="IMAGE"
            renderHeader={
              <Title
                description="Gün içinde yazılan makaleler burada listelenir."
                title="Son Yazılar"
              />
            }
            className="mb-10"
            items={hero}
          />
          <BlogList
            items={remaining}
            renderHeader={<Title title="Diğer Yazılar" />}
            notFound={{
              title: "Bulunamadı",
              description:
                "Makaleler en kısa sürede burada listelenecektir. Lütfen bizi takip etmeyi unutmayın!",
            }}
            repeaterClassName="grid xl:grid-cols-2 grid-cols-1 gap-5"
          />
        </div>

        <div className="xl:col-span-1 col-span-2 py-10">
          <Title title="Kategoriler" />
          <CategoryList />
        </div>
      </div>
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
