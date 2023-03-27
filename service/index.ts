import axios from "axios"

export const instance = axios.create({
  baseURL: "https://fevri.codejs.dev/wp-json/wp/v2",
})

export const endpoints = {
  posts: "/posts",
}
