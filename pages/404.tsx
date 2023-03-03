import Card from "@/components/Card"
import Container from "@/components/Container"
import Seo from "@/components/Seo"

export default function NotFound() {
  return (
    <Container>
      <Seo title="Sayfa Bulunamadı" />
      <Card className="flex items-center justify-center h-full text-4xl font-black py-10">
        Bulunamadı
      </Card>
    </Container>
  )
}
