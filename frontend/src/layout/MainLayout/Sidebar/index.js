import React from 'react'
import { Sidebar } from './components'
import NavHeader from './NavHeader'
import Drawer from '@components/ui/Drawer'
import PropTypes from 'prop-types'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { BrowserView, MobileView } from 'react-device-detect'

const index = ({ drawerOpen, drawerToggle, window, children }) => {
  const matchUpMd = true

  const drawer = (
    <>
      <BrowserView>
        <PerfectScrollbar
          component='div'
          style={{
            height: !matchUpMd ? 'calc(100vh - 56px)' : 'calc(100vh - 88px)',
            paddingLeft: '5px',
            paddingRight: '5px'
          }}
        >
          <h1>DEMO 2</h1>
        </PerfectScrollbar>
      </BrowserView>
      <MobileView>
        <h1>DEMO </h1>
      </MobileView>
    </>
  )

  const container =
    window !== undefined ? () => window.document.body : undefined

  const MyDrawer = ({ drawerOpen }) => {
    {
      !drawerOpen ? (
        <Drawer show={drawerOpen} />
      ) : (
        <Sidebar>
          <NavHeader />
          Este es Sidebar
          {children}
        </Sidebar>
      )
    }
  }

  return (
    <Sidebar>
      <NavHeader />
      Este es Sidebar
      {children}
    </Sidebar>
  )
}

Sidebar.propTypes = {
  drawerOpen: PropTypes.bool,
  drawerToggle: PropTypes.func,
  window: PropTypes.object
}

export default index
