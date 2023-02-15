import { getSearchPosts } from "@/services/post"
import { PostType } from "@/types/index"
import classNames from "classnames"
import { useState, useEffect } from "react"
import Form from "@/components/FormElement"
import Loading from "@/components/Loading"
import { TextList } from "@/components/Witgets"
import Card from "@/components/Card"
import { itemsLength } from "@/helpers/utils"

export default function SearchModal() {
  const [posts, setPosts] = useState<PostType[]>([])
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(false)
  const minQueryLength = 3

  const handleGetPosts = () => {
    setLoading(true)
    getSearchPosts(search)
      .then((response) => setPosts(response))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    handleGetPosts()
  }, [search])

  return (
    <Card className="dark:bg-black bg-white p-8">
      <Form.Input
        placeholder="Hadisler, sünnetler...."
        onChange={(event) => setSearch(event.target.value)}
        className={classNames("py-4 px-6 mb-5")}
      />

      {loading ? (
        <Loading />
      ) : itemsLength(search) >= minQueryLength ? (
        <TextList
          notFound={{
            title: "hiçbir şey bulunamadı",
            description: "Aradığınız kriterlere göre bir yazı bulunamadı",
          }}
          title={{
            title: loading ? "Aranıyor" : "Arama Sonuçları",
          }}
          items={posts}
        />
      ) : (
        <Card className="dark:text-gray-600 text-gray-500 text-center">
          Henüz Bir şey aramadın
        </Card>
      )}
    </Card>
  )
}
