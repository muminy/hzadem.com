import Container from "@/components/Container"
import { BlogList, SwiperList } from "@/components/Sections"
import getAyets, { getAyet } from "@/lib/ayets"
import getPosts from "../lib/posts"
import { AyetType, PostType } from "../types"

type HomeProps = {
  posts: PostType[]
  ayets: AyetType[]
}

export default function Home({ posts, ayets }: HomeProps) {
  console.log(ayets)
  return (
    <Container>
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
