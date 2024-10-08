import "dayjs/locale/tr"

import dayjs from "dayjs"
import { get } from "lodash"
import { config } from ":/constants/site"

dayjs.locale("tr")

export const getPostImage = (data: unknown): string => {
  return get(
    data,
    "node.sourceUrl",
    config.domain + "/images/default.jpeg"
  )
}

export const getDate = (date: string) => {
  return dayjs(date).format("DD MMMM, YYYY")
}

export function removeHtmlTags(str: string) {
  return str
    .replace(/(<([^>]+)>)/gi, "")
    .replaceAll("&#8217;", "'")
}
