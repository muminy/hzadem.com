import Breadcrumb from "@/components/Breadcrumb"
import Container from "@/components/Container"
import Logo from "@/components/Logo"
import Seo from "@/components/Seo"

export default function Hakkimizda() {
  return (
    <Container size="small" className="article-content">
      <Seo title="Hakkımızda" description="hzadem.com Hakkında" />
      <Breadcrumb
        items={[{ title: "Anasayfa", to: "/" }, { title: "Hakkımızda" }]}
      />
      <Logo className="mt-10 flex justify-center" />
      <p className="text-center">
        Misyonumuz, okuyuculara İslami inançlar ve uygulamalar, Müslüman
        tarihi, İslam sanatı ve kültürü ve güncel olaylar dahil olmak üzere
        çeşitli konularda kapsamlı ve güncel içerik sağlamaktır.
      </p>
    </Container>
  )
}
