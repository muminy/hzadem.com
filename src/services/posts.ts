"use server"

import { WordpresPostNodes, WordpresSinglePost } from ":/types"
import client from ":/lib/apollo"
import {
  QUERY_POPULAR_POSTS,
  QUERY_POST_BY_SLUG,
  QUERY_POSTS,
  QUERY_POSTS_BY_CATEGORY_ID,
  QUERY_POSTS_BY_TAG_NAME,
} from ":/graphql/post"
import { get } from "lodash"
import { notFound } from "next/navigation"

export const getPosts = async (
  first = 10,
  after: string | null | undefined = null
) => {
  try {
    const response = await client.query<WordpresPostNodes>({
      query: QUERY_POSTS,
      variables: { first, after },
    })

    return {
      posts: get(response, "data.posts.nodes", []),
      hasMore: get(
        response,
        "data.posts.pageInfo.hasNextPage",
        false
      ),
      endCursor: get(
        response,
        "data.posts.pageInfo.endCursor",
        ""
      ),
    }
  } catch (e) {
    return {
      posts: [],
      hasMore: false,
      endCursor: "",
    }
  }
}

export async function getPopularPosts() {
  try {
    const response = await client.query<WordpresPostNodes>({
      query: QUERY_POPULAR_POSTS,
    })

    return response.data.posts.nodes
  } catch (e) {
    return []
  }
}

export async function getPostBySlug(slug: string) {
  try {
    const response = await client.query<WordpresSinglePost>({
      query: QUERY_POST_BY_SLUG,
      variables: { slug },
      fetchPolicy: "network-only",
    })

    if (!response.data.post) {
      notFound()
    }

    return response.data.post
  } catch (e) {
    notFound()
  }
}

export async function getPostCategory(id: number) {
  try {
    const response = await client.query<WordpresPostNodes>({
      query: QUERY_POSTS_BY_CATEGORY_ID,
      variables: {
        id,
      },
    })

    return response.data.posts.nodes
  } catch (e) {
    return []
  }
}

export async function getPostByTag(tag: string) {
  try {
    const response = await client.query<WordpresPostNodes>({
      query: QUERY_POSTS_BY_TAG_NAME,
      variables: {
        tag,
      },
    })

    return response.data.posts.nodes
  } catch (e) {
    return []
  }
}
