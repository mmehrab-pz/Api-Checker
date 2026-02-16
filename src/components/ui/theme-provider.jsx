"use client"

import { useEffect, useState, createContext, useContext } from "react"

export function ThemeProvider({ children, attribute = "class", defaultTheme = "system", enableSystem = true }) {
  const [theme, setTheme] = useState(defaultTheme)

  useEffect(() => {
    if (enableSystem && defaultTheme === "system") {
      const darkQuery = window.matchMedia("(prefers-color-scheme: dark)")
      setTheme(darkQuery.matches ? "dark" : "light")
    }
  }, [enableSystem, defaultTheme])

  useEffect(() => {
    if (attribute === "class") {
      document.documentElement.classList.remove("dark", "light")
      document.documentElement.classList.add(theme)
    }
  }, [theme, attribute])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

const ThemeContext = createContext({ theme: "light", setTheme: () => {} })

export function useTheme() {
  return useContext(ThemeContext)
}
