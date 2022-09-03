import React from 'react'
import {Header} from './components';

const index = ({ handleLeftDrawerToggle }) => {
  return (
    <Header>
      Header
      <button onClick={handleLeftDrawerToggle}>Menu</button>
    </Header>
  )
}

export default index