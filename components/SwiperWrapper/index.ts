import { ReactNode } from "react"
import { SwiperProps } from "swiper/react"

export type SwiperWrapperProps = Pick<
  SwiperProps,
  "slidesPerView" | "spaceBetween"
> & {
  children: ReactNode
  title?: string
  showButtons?: boolean
  className?: string
}
export { default } from "./SwiperWrapper"
