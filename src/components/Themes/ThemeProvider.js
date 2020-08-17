import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { themeLight, themeDark } from '../../globalStyles'
import GlobalStyles from '../../globalStyles'

const defaultContext = {
  currentTheme: 'light',
  toggle: () => {},
}

const ThemeContext = React.createContext(defaultContext)
const useTheme = () => React.useContext(ThemeContext)


const ThemeContainer = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('light')

  const toggle = () => 
    currentTheme === 'light'
      ? setCurrentTheme('dark')
      : setCurrentTheme('light')
  

  return (
    <ThemeProvider theme={currentTheme === "dark" ? {...themeDark, toggle} : {...themeLight, toggle}}>
       <GlobalStyles theme={currentTheme === "dark" ? {...themeDark, toggle} : {...themeLight, toggle}}/>
      {children}
    </ThemeProvider>
  )
}

export { ThemeContainer , ThemeContext, useTheme }
