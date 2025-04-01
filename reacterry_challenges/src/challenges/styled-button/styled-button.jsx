import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: blue;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px
  color: white;

  &: hover {
    background: lightblue;
    color: black
  }
`

const StyledButton = () => {
  return (
    <Button> Click me!</Button>
  )
}

export default StyledButton
