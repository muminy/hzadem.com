import { WordpresPostType } from ":/types"
import DetailTags from "./detail-tags"
import DetailCategories from "./detail-categories"

export default function LeftSidebar({
  tags,
  categories,
}: WordpresPostType) {
  return (
    <div className="bg-background rounded-xl">
      <DetailCategories categories={categories.nodes} />
      <DetailTags tags={tags.nodes} />
    </div>
  )
}
