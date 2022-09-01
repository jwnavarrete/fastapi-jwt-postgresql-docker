import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
`

const index = (props) => {
  return (
    <Container {...props}>{props?.children}</Container>
  )
}

export default index