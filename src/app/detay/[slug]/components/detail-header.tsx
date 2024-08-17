import { getPostImage } from ":/lib/utils"
import { WordpresPostType } from ":/types"
import PostDetail from "./detail-post"
import Image from "next/image"

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
        <h1 className="font-black xl:text-6xl text-4xl mb-6">
          {title}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: excerpt }} />
      </div>
      <Image
        className="object-cover w-full"
        src={getPostImage(featuredImage)}
        width={1000}
        height={400}
        alt={title}
      />
    </div>
  )
}
