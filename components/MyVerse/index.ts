import { AyetType } from "@/types/index"

export { default } from "./MyVerse"

export type MyVerseProps = AyetType & {
  className?: string
  isCurrent?: boolean
}
