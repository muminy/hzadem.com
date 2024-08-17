"use client"

import Container from ":/components/Container/Container"
import { generateSeo } from ":/lib/metadata"

export async function generateMetadata() {
  return generateSeo({
    title: "Hata!",
    robots: { follow: false, index: false },
  })
}

export default function Error() {
  return (
    <Container className="py-10 bg-background mt-10">
      <div className="bg-background p-20 text-center font-semibold rounded-xl">
        Bu hata bizden kaynaklanıyor.
      </div>
    </Container>
  )
}
