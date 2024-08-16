import Container from ":/components/Container/Container"
import Logo from ":/components/Logo/Logo"
import { generateSeo } from ":/lib/metadata"

export async function generateMetadata() {
  return generateSeo({ title: "Hakkımızda" })
}

export default function About() {
  return (
    <Container className="article-content bg-background border mt-10 p-10 rounded-xl">
      <Logo size={40} className="my-10 flex justify-center" />
      <p className="text-center max-w-2xl mx-auto">
        Misyonumuz, okuyuculara İslami inançlar ve uygulamalar,
        Müslüman tarihi, İslam sanatı ve kültürü ve güncel
        olaylar dahil olmak üzere çeşitli konularda kapsamlı ve
        güncel içerik sağlamaktır.
      </p>
    </Container>
  )
}
