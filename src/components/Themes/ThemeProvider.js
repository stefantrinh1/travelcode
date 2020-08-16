import React, { useEffect, useState } from 'react'
import { ThemeConsumer } from 'styled-components'
import { theme } from '../../globalStyles'

const defaultContext = {
  currentTheme: 'light',
  toggle: () => {},
}

const ThemeContext = React.createContext(defaultContext)
const useTheme = () => React.useContext(ThemeContext)

console.log(useTheme)
const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('light')

  useEffect(() => {
    console.log(currentTheme)

    return () => {}
  })

  const toggle = () => {
    console.log('toggle hit')
    currentTheme === 'light'
      ? setCurrentTheme('dark')
      : setCurrentTheme('light')
  }

  return (
    <ThemeContext.Provider theme={theme} value={{ currentTheme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext, useTheme }
