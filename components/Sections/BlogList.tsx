import { PostType } from "@/types/index"
import { BlogMock } from "mocks/blogs"
import { BlogListProps } from "."
import BlogMenu from "../BlogMenu"
import Container from "../Container"
import MyArticle, { MyArticleProps } from "../MyArticle"
import Repeater from "../Repeater"

export default function BlogList({ posts }: BlogListProps) {
  const renderBlogList = (item: PostType, index: number) => {
    return <MyArticle key={index} {...item} />
  }
  return (
    <Container>
      <BlogMenu />
      <Repeater<PostType>
        className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 xl:gap-8 gap-5"
        renderItem={renderBlogList}
        items={posts}
      />
    </Container>
  )
}
