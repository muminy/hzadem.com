import HeroPostCard from "../PostCards/HeroPostCard"
import Container from "../Container/Container"
import Mapper from "../Mapper/Mapper"
import { getPosts } from ":/services/posts"

export default async function HeroBlogs() {
  const { posts } = await getPosts(4)

  return (
    <Container>
      <Mapper
        className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-2"
        data={posts}
        render={(item) => <HeroPostCard {...item} />}
      />
    </Container>
  )
}
