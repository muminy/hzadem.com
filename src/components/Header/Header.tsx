import Container from ":/components/Container/Container"
import Logo from ":/components/Logo/Logo"
import MenuLink from "./MenuLink"

import { getHeaderMenu } from ":/services/category"
import ResponsiveMenu from "./ResponsiveMenu"

export default async function Header() {
  const menu = await getHeaderMenu()

  return (
    <header className="h-20 bg-background border-b dark:border-white/20">
      <Container className="flex items-center justify-between h-full w-full">
        <Logo />
        <div className="xl:flex md:flex hidden h-full">
          {menu.map((item) => (
            <MenuLink key={item.slug} {...item} />
          ))}
        </div>
        <ResponsiveMenu menu={menu} />
      </Container>
    </header>
  )
}
