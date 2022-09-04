import React from 'react'
import { Sidebar } from './components'
import NavHeader from './NavHeader'

const index = ({ drawerOpen, drawerToggle, window, children }) => {
  return (
    <Sidebar>
      <NavHeader />
      Este es Sidebar
      {children}
    </Sidebar>
  )
}

export default index
