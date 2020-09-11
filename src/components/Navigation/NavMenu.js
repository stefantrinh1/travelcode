import React, { useContext } from 'react'
import { NavLink, BrowserRouter as Router } from 'react-router-dom'
import LogoImage from '../../assets/svgs/logo'
import SocialIcons from '../General/SocialIcons'
import styled, { ThemeContext } from 'styled-components'

export default function NavMenu({ navOpen }) {
  return (
    <Container style={{ left: `${navOpen ? '0px' : '-100vw'}` }}>
      <Router>
        <NavLink to='/'>
          <LogoImage />
        </NavLink>

        <NavLink to='/about'>About</NavLink>
        <NavLink to='/blog'>What's New</NavLink>
        <NavLink to='/blog'>Latest Hot Spots</NavLink>
        <NavLink to='/blog'>Blog</NavLink>
      </Router>
      <SocialIcons />
      <Button>Explore</Button>
    </Container>
  )
}

const Container = styled.ul`
  position: absolute;
  transition: all ease-in-out 0.6s;
  left: -100vw;
  height: 100vh;
  width: 100vw;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  margin: 0;
  background-color: ${({ theme }) => theme.background};
  @media (min-width: 1024px) {
    position: unset;
    flex-direction: row;
    height: unset;
    background-color: unset;
    max-width: 1200px;
    margin: 0 auto;
    div {
      margin: 0 0 0 auto;
    }
  }
  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    margin: 0.75rem;
    font-size: 1.25rem;
    :hover {
      color: ${({ theme }) => theme.primary};
    }
    @media (min-width: 1024px) {
      color: ${({ theme }) => theme.light};
    }
  }
  svg {
    max-width: 75px;
    width: 100%;
    max-height: 75px;
    :hover {
      * {
        fill: ${({ theme }) => theme.primary};
      }
    }
    * {
      fill: ${({ theme }) => theme.text};
      @media (min-width: 1024px) {
        fill: ${({ theme }) => theme.light};
      }
    }
  }
`

const Button = styled.button`
  display: none;
  @media (min-width: 1024px) {
    display: inline-block;
    background-color: ${({ theme }) => theme.primary};
    border: none;
    border-radius: 100px;
    padding: 0.75rem 2rem;
    color: ${({ theme }) => theme.light};
    font-size: 0.7rem;
    font-weight: normal;
    transition: all ease-in-out 0.3s;
    margin: 0 1.5rem;
    :hover {
      background: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme.text};
    }
  }
`
