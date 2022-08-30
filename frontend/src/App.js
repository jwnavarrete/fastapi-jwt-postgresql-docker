import { useState } from 'react'
import './App.css'
import qs from 'qs'
import axios from 'axios'

function App () {
  const initialState = {
    username: '',
    password: ''
  }

  const [data, setData] = useState(initialState)
  const handelSubmit = event => {
    // event.
    event.preventDefault()

    const username = event.target.username.value
    const password = event.target.password.value

    axios.post(
        'http://localhost:8000/auth/login',
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
       console.log(response);
      })
      .catch(error => {
        console.log(error);
      })
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <form action='frmLogin' onSubmit={e => handelSubmit(e)}>
          <input type='text' placeholder='username' name='username' />
          <input type='password' placeholder='password' name='password' />
          <input type='submit' value='Login' />
        </form>
      </header>
    </div>
  )
}

export default App
