import { IconTypes } from "../icons"

export type MenuType = {
  href: string
  title: string
  icon?: IconTypes
}

export type PostType = {
  title: string
  description?: string
  slug: string
  id: number
  image: string
  body: string
  date: string
}

export type AyetType = {
  title: string
  description: string
  slug: string
  id: number
}
