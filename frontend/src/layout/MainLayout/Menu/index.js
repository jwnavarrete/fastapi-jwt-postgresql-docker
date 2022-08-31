import { Link } from 'react-router-dom'
import React from 'react'
import AuthService from '@services/AuthService'

const index = () => {
  const handleLogout = () => {
    AuthService.logout()
  }

  return (
    <nav>
      <Link to='/'>Home</Link> |{' '} <Link to='/auth/login'>Login</Link>|{' '}
      <Link to='/recargo'>Recargo</Link>|{' '}
      <Link to='/auth/login' onClick={handleLogout}>Logout</Link>
    </nav>
  )
}

export default index
