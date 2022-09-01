import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-weight: bold;
  margin: 0;
`

const index = (props) => {
  return (
    <Title {...props}>{props?.children}</Title>
  )
}

export default index