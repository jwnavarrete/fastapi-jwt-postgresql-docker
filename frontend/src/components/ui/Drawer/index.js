import React from 'react'
import { SideDrawer } from './components.js'

const index = ({ show }) => {
  return (
    <SideDrawer show={show}>
      <h1>Hello, I'am Drawer!</h1>
    </SideDrawer>
  )
}

export default index
