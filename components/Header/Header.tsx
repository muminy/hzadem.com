import style from "./header.module.css"
import classNames from "classnames"
import React, { useState } from "react"
import Container from "../Container"
import Logo from "../Logo"
import Icon from "../Icon"
import IconButton from "../IconButton/IconButton"
import MenuList from "../MenuList"
import Drawer from "../Drawer"

export default function Header() {
  const [isShowResponsive, setIsShowResponsive] = useState(false)

  return (
    <div className={classNames(style.header)}>
      <Container
        className={classNames(
          "flex items-center justify-between",
          "xl:px-0 lg:px-16 px-4"
        )}
      >
        <Logo size={18} />
        <div className="flex items-center space-x-10">
          <MenuList />
          <div className="flex items-center space-x-1">
            <IconButton
              className="bg-gray-100 rounded-lg"
              size={16}
              icon="twitter"
            />
            <IconButton
              className="bg-gray-100 rounded-lg"
              size={16}
              icon="facebook"
            />
            <IconButton
              className="bg-gray-100 rounded-lg flex xl:hidden"
              size={16}
              onClick={() => setIsShowResponsive(true)}
              icon="menu"
            />
          </div>
        </div>
      </Container>
      <Drawer
        isActive={isShowResponsive}
        onClose={() => setIsShowResponsive(false)}
        renderContent={<MenuList isResponsive />}
      />
    </div>
  )
}
