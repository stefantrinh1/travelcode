import React from 'react'
import theme from './Themes/Theme'
import ThemeProvider from './Themes/ThemeProvider'

export default function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState('light')

  return <ThemeProvider>{children}</ThemeProvider>
}
