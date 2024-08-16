import Container from ":/components/Container/Container"

export default function DetailContent({
  content,
}: {
  content: string
}) {
  return (
    <div
      className="content-body"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
