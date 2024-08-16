import { getPosts } from ":/services/posts"
import LinePost from "../PostCards/LinePost"
import MyTitle from "../Title/Title"
import Mapper from "../Mapper/Mapper"
import LoadMorePosts from "./LoadMorePosts"
import resources from ":/resources"

export default async function LatestPosts() {
  const { posts, endCursor } = await getPosts(10)

  return (
    <div className="w-full max-w-full">
      <MyTitle title={resources.last_posts} />
      <Mapper
        className="grid grid-cols-1 gap-5 mb-5 w-full"
        data={posts}
        render={(item) => <LinePost {...item} />}
      />
      <LoadMorePosts cursor={endCursor} />
    </div>
  )
}
