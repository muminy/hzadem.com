import Link from "next/link"
import { PostProps } from "."
import Image from "next/image"
import clsx from "clsx"
import { getPostImage } from ":/lib/utils"
import resources from ":/resources"

export default function HeroPostCard({
  title,
  slug,
  featuredImage,
}: PostProps) {
  return (
    <Link
      className={clsx(
        "xl:h-[500px] h-48 rounded-xl overflow-hidden relative",
        "after:w-full after:h-full after:absolute after:left-0 after:top-0",
        "after:bg-gradient-to-b after:to-black after:from-transparent"
      )}
      href={`/${resources.post_detail_path}/${slug}`}>
      <Image
        src={getPostImage(featuredImage)}
        alt={title}
        className="h-full object-cover"
        width={1000}
        height={600}
      />

      <div className="absolute bottom-0 px-6 py-6 text-white z-10">
        <h2 className="font-black text-3xl">{title}</h2>
      </div>
    </Link>
  )
}
