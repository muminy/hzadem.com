import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import Button from "../Button"

export default function SwitchTheme() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  // access for theme
  useEffect(() => setMounted(true), [])

  const isDark = resolvedTheme === "dark"

  const changeTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  if (!mounted) return null

  return <Button.Gradient>Switch</Button.Gradient>
}
