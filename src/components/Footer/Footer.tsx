import Container from ":/components/Container/Container"
import Link from "next/link"
import Logo from ":/components/Logo/Logo"

export default function Footer() {
  return (
    <footer className="py-10 mt-auto bg-background">
      <Container className="flex xl:justify-between justify-center gap-y-5 flex-wrap items-center">
        <Logo />
        <div className="flex gap-x-8 group">
          <Link
            className="font-semibold text-sm duration-300"
            href={"/gizlilik-politikasi"}>
            Gizlilik Politikası
          </Link>
          <Link
            className="font-semibold text-sm duration-300"
            href={"/hakkimizda"}>
            Hakkımızda
          </Link>
          <Link
            className="font-semibold text-sm duration-300"
            href={"/iletisim"}>
            İletişim
          </Link>
        </div>
      </Container>
    </footer>
  )
}
