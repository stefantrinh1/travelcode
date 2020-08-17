import React, { useEffect, useState, useContext } from 'react'
import { useTheme } from './Themes/ThemeProvider'
import styled,{ThemeContext} from 'styled-components'
import Switch from 'react-switch'

export default function Switcher(props) {
  const themeState = useContext(ThemeContext)
  const [toggleActive, setToggleActive] = useState(false)

  return (
    <Container>
      <Switch
        onChange={() => {
          themeState.toggle()
          setToggleActive(!toggleActive)
        }}
        checked={toggleActive}
        onColor='#86d3ff'
        onHandleColor='#2693e6'
        handleDiameter={30}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)'
        activeBoxShadow='0px 0px 1px 10px rgba(0, 0, 0, 0.2)'
        height={20}
        width={48}
        className='react-switch'
        id='material-switch'
        aria-labelledby='darkMode'
      />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  position: fixed;
  bottom: 0.5rem;
  right: 0.5rem;
`
