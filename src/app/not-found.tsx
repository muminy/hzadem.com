import Container from ":/components/Container/Container"
import { generateSeo } from ":/lib/metadata"

export async function generateMetadata() {
  return generateSeo({
    title: "Bulamadık",
    robots: { follow: false, index: false },
  })
}

export default function NotFound() {
  return (
    <Container className="py-10">
      <div className="bg-background p-20 text-center font-semibold rounded-xl border">
        Bir Şey Bulamadık
      </div>
    </Container>
  )
}
