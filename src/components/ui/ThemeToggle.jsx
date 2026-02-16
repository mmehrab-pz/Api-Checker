"use client"

import { useTheme } from "./theme-provider"
import { Switch } from "@/components/ui/switch"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    // <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
    //   {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
    // </Button>
    <Switch  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}/>
  )
}
