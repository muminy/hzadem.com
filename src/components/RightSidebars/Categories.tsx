import CategoryLink from "../Category/CategoryLink"
import Mapper from "../Mapper/Mapper"
import { getCategories } from ":/services/category"
import resources from ":/resources"

export default async function Categories() {
  const data = await getCategories()

  return (
    <div className="rounded-2xl overflow-hidden border dark:border-white/20">
      <div className="bg-background text-black dark:text-white font-semibold px-4 py-4">
        <h3>{resources.categories}</h3>
      </div>
      <Mapper
        className="bg-background px-2 pb-2 space-y-2"
        data={data}
        render={(item) => <CategoryLink {...item} />}
      />
    </div>
  )
}
