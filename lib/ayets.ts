import matter from "gray-matter"
import fs from "fs"
import path from "path"

interface IAyets {
  id: string
  slug: string
  title: string
  ayet: string
}

export default function getAyets() {
  let dir
  try {
    dir = fs.readdirSync("./ayets/")
  } catch (err) {
    // No posts yet
    return []
  }
  const posts: IAyets[] = dir
    .filter((file) => path.extname(file) === ".md")
    .map((file) => {
      const postContent = fs.readFileSync(`./ayets/${file}`, "utf8")
      const { data, content } = matter(postContent)

      return {
        ...(data as IAyets),
        body: content,

        // title: data.title.replace(" ", " "),
      }
    })
    .filter(Boolean)
  return posts
}

export function getAyet(slug: string): IAyets | null {
  const posts = getAyets()
  const post = posts.find((p) => `${p.slug}-${p.id}` === slug)
  return post || null
}
