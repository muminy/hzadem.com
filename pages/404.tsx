import Card from "@/components/Card"
import Container from "@/components/Container"
import NotFound from "@/components/NotFound"
import Seo from "@/components/Seo"

export default function NotFoundPage() {
  return (
    <Container className="py-10">
      <Seo title="Sayfa Bulunamadı" />
      <NotFound
        title="Sayfa Bulunamadı"
        description="Hatalı arama yapmış olabilirsin"
      />
    </Container>
  )
}