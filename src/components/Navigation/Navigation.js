import React, { useState, useEffect } from 'react'
import { NavLink, BrowserRouter as Router } from 'react-router-dom'
import LogoImage from '../../assets/svgs/logo'
import styled from 'styled-components'
import Hamburger from './Hamburger'
import NavMenu from './NavMenu'

export default function Navigation() {
  const [navOpen, setNavOpen] = useState(false)

  const toggleNav = () => {
    setNavOpen(!navOpen)
  }

  return (
    <Nav>
      <MobileLogoContainer>
        <Router>
          <NavLink to='/'>
            <LogoImage />
          </NavLink>
        </Router>
      </MobileLogoContainer>
      <Hamburger toggleNav={toggleNav} navOpen={navOpen} />
      <NavMenu navOpen={navOpen} />
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  width: 100%;
  position: fixed;
  z-index: 1000;
  height: 75px;
  @media (min-width: 1024px) {
    position: absolute;
    top: 0;
    height: unset;
  }
`

const MobileLogoContainer = styled.div`
  position: fixed;
  top: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  max-width: 75px;
  max-height: 75px;
  svg {
    width: 100%;
    height: unset;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`
