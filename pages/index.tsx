import Container from "@/components/Container"
import { BlogList, SwiperList } from "@/components/Sections"
import Seo from "@/components/Seo"
import { initialSeo } from "@/constants/seo"
import getAyets from "@/lib/ayets"
import getPosts from "../lib/posts"
import { AyetType, PostType } from "../types"

type HomeProps = {
  posts: PostType[]
  ayets: AyetType[]
}

export default function Home({ posts, ayets }: HomeProps) {
  return (
    <Container>
      <Seo {...initialSeo} />
      <SwiperList ayets={ayets} />
      <BlogList posts={posts} />
    </Container>
  )
}

export async function getStaticProps() {
  const posts = getPosts()
  const ayets = getAyets()

  return {
    props: { posts, ayets },
  }
}
