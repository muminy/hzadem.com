import clsx from "clsx"
import Link from "next/link"

export default function Category() {
  return (
    <Link
      href={"/"}
      className={clsx(
        "h-14 overflow-hidden relative",
        "flex items-center justify-center hover:after:bg-black after:duration-300",
        "after:bg-black/70 after:left-0 after:top-0 after:w-full after:h-full after:absolute"
      )}>
      <img
        className="absolute left-0 top-0 w-full h-full object-cover"
        src="https://mir-s3-cdn-cf.behance.net/projects/115/abdb00190825209.Y3JvcCwyMzc3LDE4NTksMjA1LDY1Mw.jpg"
      />
      <h2
        className={clsx(
          "rounded-2xl z-10 text-white",
          "px-6 py-1.5 text-sm font-semibold max-w-full text-nowrap"
        )}>
        Web Development
      </h2>
    </Link>
  )
}
