import { TagListProps } from "."
import NotFound from "../NotFound"
import Repeater from "../Repeater"
import Tag from "../Tag"
import Title from "../Title"

export default function TagList({ tags }: TagListProps) {
  return (
    <Repeater
      renderHeader={<Title title="İlgili Etiketler" />}
      items={tags}
      className="flex flex-wrap"
      renderItem={(item, key) => (
        <Tag
          href={`/etiket/${item.slug}`}
          className="mb-2 mr-2"
          key={key}
          text={item.name}
        />
      )}
      renderNotFound={<NotFound title="Etiket Bulunamadı" />}
    />
  )
}
