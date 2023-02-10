import classNames from "classnames"
import { PostHeaderProps } from "."
import Container from "../Container"

export default function PostHeader({
  author,
  image,
  title,
  date,
}: PostHeaderProps) {
  return (
    <Container
      className={classNames(
        "relative",
        "after:absolute after:bg-gradient-to-b after:to-black after:from-transparent",
        "after:w-full after:h-full after:top-0 mb-10 rounded-3xl overflow-hidden"
      )}
      size="xlarge"
    >
      <img
        className="object-cover self-center xl:h-[500px] lg:h-[300px] h-[240px] w-full"
        src={image}
      />
      <Container
        size="small"
        className={classNames(
          "absolute right-0 bottom-0 left-0 mx-auto z-10 text-white",
          "xl:px-0 lg:px-0 md:px-0 px-5 w-full xl:py-4 lg:py-4 md:py-4 py-5"
        )}
      >
        <h1
          className={classNames(
            "font-bold xl:text-4xl text-xl z-10 mb-5",
            "xl:leading-10 lg:leading-6 leading-6"
          )}
        >
          {title}
        </h1>
        <div
          className={classNames(
            "flex items-center text-white",
            "space-x-3 text-sm"
          )}
        >
          <div>{author}</div>
          <div className="w-1 h-1 bg-white bg-opacity-30 rounded-full" />
          <div>{date}</div>
        </div>
      </Container>
    </Container>
  )
}
