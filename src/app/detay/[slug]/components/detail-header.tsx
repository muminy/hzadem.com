import { getPostImage } from ":/lib/utils"
import { WordpresPostType } from ":/types"
import PostDetail from "./detail-post"

export interface DetailHeaderProps extends WordpresPostType {}

export default function DetailHeader({
  title,
  excerpt,
  featuredImage,
  author,
  date,
}: DetailHeaderProps) {
  return (
    <div className="mb-10">
      <PostDetail author={author} date={date} />
      <div className="mb-10">
        <h1 className="font-black xl:text-6xl text-5xl mb-6">
          {title}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: excerpt }} />
      </div>
      <img
        className="rounded-3xl h-60 object-cover w-full"
        src={getPostImage(featuredImage)}
        alt={title}
      />
    </div>
  )
}
