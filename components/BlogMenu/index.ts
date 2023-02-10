import { BlogMenuTypes } from "../Sections"

export type BlogMenuProps = {
  menu: BlogMenuTypes
  getMenu: (menu: BlogMenuTypes) => void
}

export { default } from "./BlogMenu"
