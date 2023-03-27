import Container from "@/components/Container"
import Logo from "@/components/Logo"
import Seo from "@/components/Seo"

export default function About() {
  return (
    <Container size="small" className="article-content">
      <Seo title="Hakkımızda" description="HzAdem.com Hakkında" />
      <Logo
        size={40}
        className="my-10 flex justify-center dark:!text-white !text-black"
      />
      <p className="text-center">
        Misyonumuz, okuyuculara İslami inançlar ve uygulamalar, Müslüman
        tarihi, İslam sanatı ve kültürü ve güncel olaylar dahil olmak üzere
        çeşitli konularda kapsamlı ve güncel içerik sağlamaktır.
      </p>
    </Container>
  )
}
