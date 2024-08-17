"use client"

import { showSheet } from ":/lib/sheet"
import { WordpressCategoryType } from ":/types"

export interface ResponsiveMenuProps {
  menu: WordpressCategoryType[]
}
export default function ResponsiveMenu({
  menu,
}: ResponsiveMenuProps) {
  return (
    <button
      aria-label="responsive-menu"
      onClick={() => showSheet("responsive-menu", { menu })}
      className="w-10 h-10 bg-secondary rounded-full center-center xl:!hidden md:!hidden block">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={16}
        height={16}
        fill="currentColor">
        <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path>
      </svg>
    </button>
  )
}
