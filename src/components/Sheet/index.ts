import { createRef } from "react"
import SheetPages from "./pages"

export type SheetListType = keyof typeof SheetPages
export type SheetPositionType = "center" | "top"
export type SheetRefType = {
  show(modalName: SheetListType, props: any): void
  close(): void
}

export const sheetRef = createRef<SheetRefType>()

export { default } from "./Sheet"
