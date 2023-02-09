import matter from "gray-matter"
import fs from "fs"
import path from "path"

interface IPosts {
  id: string
  slug: string
  title: string
  body: string | null
  description?: string
}

export default function getPosts() {
  let dir
  try {
    dir = fs.readdirSync("./posts/")
  } catch (err) {
    // No posts yet
    return []
  }
  const posts: IPosts[] = dir
    .filter((file) => path.extname(file) === ".md")
    .map((file) => {
      const postContent = fs.readFileSync(`./posts/${file}`, "utf8")
      const { data, content } = matter(postContent)

      return {
        ...(data as IPosts),
        body: content,

        // title: data.title.replace(" ", " "),
      }
    })
    .filter(Boolean)
  return posts
}

export function getPost(slug: string): IPosts | null {
  const posts = getPosts()
  const post = posts.find((p) => `${p.slug}-${p.id}` === slug)
  return post || null
}
