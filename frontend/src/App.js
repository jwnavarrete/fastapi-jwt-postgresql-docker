import { useState } from 'react'
import qs from 'qs'
import axios from 'axios'
import React from 'react'
import Login from '@pages/Login'
import LoginDemo from '@pages/LoginDemo'
import Routes from '@routes';
import NavigationScroll from '@layout/NavigationScroll';

function App() {
  return (
    <NavigationScroll>
      <Routes />
    </NavigationScroll>
  )
}

export default App