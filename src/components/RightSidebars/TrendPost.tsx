import TrendPostCard from "../PostCards/TrendPostCard"
import Mapper from "../Mapper/Mapper"
import { getPopularPosts } from ":/services/posts"
import resources from ":/resources"

export default async function TrendBlogs() {
  const data = await getPopularPosts()

  return (
    <div className="rounded-2xl overflow-hidden border dark:border-white/20">
      <div className="bg-background font-semibold flex items-center justify-between px-4 py-4">
        <h3>{resources.popular_content}</h3>
      </div>

      <Mapper
        className="bg-background px-2 pb-2 space-y-2"
        data={data}
        render={(item) => <TrendPostCard {...item} />}
      />
    </div>
  )
}
