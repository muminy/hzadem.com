import { AxiosResponse } from "axios"
import { instance } from "./api"
import { endpoints } from "./endpoints"
import {
  WordpressCategoryNode,
  WordpressCategoryNodes,
  WordpressCategoryType,
} from ":/types"
import client from ":/lib/apollo"
import {
  QUERY_CATEGORIES,
  QUERY_CATEGORY_BY_SLUG,
} from ":/graphql/category"
import { ApolloQueryResult } from "@apollo/client"
import { filter } from "lodash"
import { notFound } from "next/navigation"

export const getCategories = () => {
  return instance
    .get(endpoints.categories)
    .then(
      (response: AxiosResponse<WordpressCategoryType[]>) =>
        response.data
    )
}

export const getHeaderMenu = async () => {
  try {
    return await client
      .query({ query: QUERY_CATEGORIES })
      .then(
        (response: ApolloQueryResult<WordpressCategoryNodes>) =>
          filter(response.data.categories.nodes, {
            showmenu: true,
          })
      )
  } catch (e) {
    return []
  }
}

export async function getCategoryBySlug(slug: string) {
  try {
    const response = await client.query<WordpressCategoryNode>({
      query: QUERY_CATEGORY_BY_SLUG,
      variables: { slug },
    })

    if (!response.data.category) {
      notFound()
    }

    return response.data.category
  } catch (e) {
    notFound()
  }
}
