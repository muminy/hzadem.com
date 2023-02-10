import { PostType } from "@/types/index"
import { useMemo, useState } from "react"
import { BlogListProps, BlogMenuTypes } from "."
import BlogMenu from "../BlogMenu"
import Container from "../Container"
import MyArticle from "../MyArticle"
import NotFound from "../NotFound"
import Repeater from "../Repeater"

export default function BlogList({ posts }: BlogListProps) {
  const [menu, setMenu] = useState<BlogMenuTypes>(BlogMenuTypes.ALL)

  const postList = useMemo(() => {
    return menu === BlogMenuTypes.ALL
      ? posts
      : posts.filter((item) => item.tags.includes(menu))
  }, [menu])

  const renderBlogList = (item: PostType, index: number) => {
    return <MyArticle key={index} {...item} />
  }

  return (
    <Container>
      <BlogMenu menu={menu} getMenu={setMenu} />
      <Repeater<PostType>
        className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 gap-5"
        renderItem={renderBlogList}
        renderNotFound={
          <NotFound
            title="Bulunamadı"
            description="Bu kategoriye ait bir yazı bulunamadı"
          />
        }
        items={postList}
      />
    </Container>
  )
}
