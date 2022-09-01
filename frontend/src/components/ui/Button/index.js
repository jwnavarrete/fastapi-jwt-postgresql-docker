import React from 'react'
import styled, { css } from 'styled-components'

const Button = styled.button`
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;

  ${props => {
    switch (props.color) {
      case 'primary':
        return css`
          border: 1px solid #ff4b2b;
          background-color: #ff4b2b;
          color: #ffffff;
          &:hover {
            border: 1px solid #c40000;
            background-color: #c40000;
          }
        `
      case 'secondary':
        return css`
          border: 1px solid #f57f17;
          background-color: #f57f17;
          color: #ffffff;
          &:hover {
            border: 1px solid #bc5100;
            background-color: #bc5100;
          }
        `
      default:
        return css`
          border: 1px solid #f5f5f5;
          background-color: #f5f5f5;
          color: #000;
          &:hover {
            background-color: #e0e0e0;
          }
        `
    }
  }}
`

const index = props => {
  return <Button {...props}>{props?.children}</Button>
}

export default index
