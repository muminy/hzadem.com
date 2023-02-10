import { AyetType, PostType } from "@/types/index"

export { default as SwiperList } from "./SwiperList"
export { default as BlogList } from "./BlogList"

export type BlogListProps = {
  posts: PostType[]
}

export type AyetSwiperProps = {
  ayets: AyetType[]
}

export enum BlogMenuTypes {
  "ALL" = "ALL",
  "HADIS" = "hadis",
  "SUNNET" = "sünnet",
}