import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;

  &:hover {
    -webkit-transition: border-color 0.3s ease-in-out;
    -moz-transition: border-color 0.3s ease-in-out;
    transition: border-color 0.3s ease-in-out;
    border: 1px solid #aaa;
  }
`

const index = ({ register, name, ...rest }) => {
  if(register){
    return <Input {...register(name)} {...rest} />
  }else{
    return <Input {...rest} />
  }
}

export default index
