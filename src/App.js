import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Switcher from './components/Switcher'
import './App.css'
import { ThemeProvider } from './components/Themes/ThemeProvider'
import Layout from './components/Layout/Layout'
import Context from './components/Context'

function App() {
  return (
    <Context.Provider value={{}}>
      <ThemeProvider>
        <Layout>
          <Switcher />
        </Layout>
      </ThemeProvider>
    </Context.Provider>
  )
}

export default App
