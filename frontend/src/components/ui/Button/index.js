import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #ff4b2b;
  background-color: #ff4b2b;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;

  &:hover {
    border: 1px solid #c40000;
    background-color: #c40000;
  }
`

const index = props => {
  return <Button {...props}>{props?.children}</Button>
}

export default index
