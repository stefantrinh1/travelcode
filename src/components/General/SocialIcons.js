import React from 'react'
import styled from 'styled-components'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {  } from '@fortawesome/free-solid-svg-icons'
import Facebook from '../../assets/svgs/Facebook'
import Instagram from '../../assets/svgs/Instagram'
import Twitter from '../../assets/svgs/Twitter'
import Pinterest from '../../assets/svgs/Pinterest'
import YouTube from '../../assets/svgs/YouTube'

export default function SocialIcons() {
  return (
    <Container>
      <Facebook />
      <Instagram />
      <Twitter />
      <Pinterest />
      <YouTube />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  padding: 2rem 1rem;
  max-width: 200px;
  svg {
    height: 1rem;
  }
`
