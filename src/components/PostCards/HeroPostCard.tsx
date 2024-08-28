import Link from "next/link"
import { PostProps } from "."
import Image from "next/image"
import clsx from "clsx"
import { getDate, getPostImage } from ":/lib/utils"
import resources from ":/resources"

export default function HeroPostCard({
  title,
  slug,
  featuredImage,
  date,
}: PostProps) {
  return (
    <article
      className={clsx(
        "xl:h-[500px] h-48 rounded-xl overflow-hidden relative",
        "after:w-full after:h-full after:absolute after:left-0 after:top-0",
        "after:bg-gradient-to-b after:to-black after:from-transparent"
      )}>
      <Link
        className="w-full h-full block"
        href={`/${resources.post_detail_path}/${slug}`}>
        <Image
          src={getPostImage(featuredImage)}
          alt={title}
          className="h-full object-cover"
          width={1000}
          height={600}
          placeholder="blur"
          blurDataURL={getPostImage(featuredImage)}
        />

        <div className="absolute bottom-0 px-6 py-6 text-white z-10 h-full flex flex-col justify-end gap-y-2">
          <h2 className="font-black xl:text-3xl text-xl">
            {title}
          </h2>
          <div className="text-sm font-semibold text-white/60">
            {getDate(date)}
          </div>
        </div>
      </Link>
    </article>
  )
}
