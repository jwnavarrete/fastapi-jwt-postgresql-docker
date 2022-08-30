import React from 'react'
import qs from 'qs'
import axios from 'axios'
import urls from '@utils/urls'

const Login = () => {
  const handelSubmit = event => {
    event.preventDefault()

    const username = event.target.username.value
    const password = event.target.password.value

    axios
      .post(
        urls.API_AUTH,
        qs.stringify({
          username: username,
          password: password
        }),
        {
          headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }
      )
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <>
      <div>Login</div>
      <form action='frmLogin' onSubmit={e => handelSubmit(e)}>
        <input type='text' placeholder='username' name='username' />
        <input type='password' placeholder='password' name='password' />
        <input type='submit' value='Login' />
      </form>
    </>
  )
}

export default Login
