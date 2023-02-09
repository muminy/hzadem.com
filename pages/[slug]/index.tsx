import Container from "@/components/Container"
import Markdown from "@/components/Markdown"
import { PostHeader } from "@/components/PostDetail"
import getPosts, { getPost } from "@/lib/posts"
import { PostType } from "@/types/index"
import { GetStaticPropsContext } from "next"

type PostProps = {
  post: PostType
}

export default function Post({ post }: PostProps) {
  return (
    <Container size="xlarge" className="acontent">
      <PostHeader
        author="Mümin"
        image={post.image}
        title={post.title}
        date="10 Ocak, 2023"
      />
      <Container size="small" className="p-0">
        <Markdown content={post.body} />
      </Container>
    </Container>
  )
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const post = getPost(context.params?.slug as string)

  return {
    props: { post },
  }
}

export async function getStaticPaths() {
  const posts = getPosts()
  return {
    paths: posts.map((item) => `/${item.slug}-${item.id}`),
    fallback: false, // false or 'blocking'
  }
}
