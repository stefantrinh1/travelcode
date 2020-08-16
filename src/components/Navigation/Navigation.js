import React from 'react'
import styled from 'styled-components'
import Hamburger from './Hamburger'

export default function Navigation() {
  return (
    <Nav>
      <Hamburger />
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  width: 100%;
  background: blue;
`
