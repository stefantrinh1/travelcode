import React from 'react'
import styled from 'styled-components'

export default function Hamburger() {
  return (
    <Container>
      <Layer />
      <Layer />
      <Layer />
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  display: flex;
  align-self: center;
  flex-direction: column;
  justify-content: space-between;
  width: 40px;
  height: 40px;
  padding: 11px 5px;
  cursor: pointer;
  margin: 0 0 0 auto;
  z-index: 10;
`

const Layer = styled.div`
  align-self: flex-end;
  height: 2px;
  width: 100%;
  background: black;
`
