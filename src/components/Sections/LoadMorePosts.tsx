"use client"

import { getPosts } from ":/services/posts"
import LinePost from "../PostCards/LinePost"
import Mapper from "../Mapper/Mapper"
import { useState, useTransition } from "react"
import { WordpresPostType } from ":/types"
import resources from ":/resources"

export interface LoadMorePostsProps {
  cursor: string
}

export default function LoadMorePosts({
  cursor = "",
}: LoadMorePostsProps) {
  const [allPosts, setAllPosts] = useState<WordpresPostType[]>(
    []
  )

  const [isPending, startTransition] = useTransition()
  const [hasMoreData, setHasMoreData] = useState(true)
  const [currentCursor, setCurrentCursor] =
    useState<string>(cursor)

  const loadMorePosts = async () => {
    if (hasMoreData) {
      const { posts, endCursor, hasMore } = await getPosts(
        10,
        currentCursor
      )

      setHasMoreData(hasMore)
      setCurrentCursor(endCursor)
      setAllPosts((prevPosts) => [...prevPosts, ...posts])
    }
  }

  return (
    <div className="pb-10">
      <Mapper
        className="grid grid-cols-1 gap-5 mb-10"
        data={allPosts}
        render={(item) => <LinePost {...item} />}
      />

      {hasMoreData ? (
        <button
          disabled={isPending}
          onClick={() => {
            startTransition(() => loadMorePosts())
          }}
          className="px-10 py-4 bg-blue-600 text-wrap font-semibold rounded-3xl text-white disabled:bg-opacity-35">
          {resources.more_button}
        </button>
      ) : (
        <div className="bg-background rounded-xl py-6 text-center font-semibold border text-gray-600">
          {resources.all_loaded}
        </div>
      )}
    </div>
  )
}
