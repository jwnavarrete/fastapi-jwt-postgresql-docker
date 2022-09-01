import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
`

const index = (props) => {
  return (
    <Box {...props}>{props?.children}</Box>
  )
}

export default index