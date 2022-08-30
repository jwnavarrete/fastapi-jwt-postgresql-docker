import { useState } from 'react'
import './App.css'
import qs from 'qs'
import axios from 'axios'
import React from 'react'
import Login from '@pages/Login'
import LoginDemo from '@pages/LoginDemo'

function App () {
  return (
    <>
      <Login />
      <LoginDemo />
    </>
  )
}

export default App
