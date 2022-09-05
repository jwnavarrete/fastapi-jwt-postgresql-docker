import React, { useState } from 'react'
import qs from 'qs'
import axios from 'axios'
import Routes from '@routes'
import NavigationScroll from '@layout/NavigationScroll'
import { ThemeProvider } from 'styled-components'
import theme from '@themes'
import '@assets/scss/main.scss'

function App () {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationScroll>
          <Routes />
        </NavigationScroll>
      </ThemeProvider>
    </>
  )
}

export default App
