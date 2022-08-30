import React from 'react'
import qs from 'qs'
import axios from 'axios'
import urls from '@utils/urls'
import './style.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'

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

  // Put this inside your component before the return statement
  const onSubmit = values => {
    // form is valid
    console.log(values)
  }

  function validateEmail (value) {
    let error
    if (!value) {
      error = 'Email is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address format'
    }

    return error
  }
  function validatePassword (value) {
    let error
    if (!value) {
      error = 'Password is required'
    } else if (value.length < 3) {
      error = 'Password must be 3 characters at minimum'
    }

    return error
  }

  return (
    <>
      <h1>Login with Formik</h1>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label htmlFor='email'>Email</label>
              <Field
                name='email'
                placeholder='Enter email'
                className={`${
                  touched.email && errors.email ? 'is-invalid' : ''
                }`}
                validate={validateEmail}
              />
              <ErrorMessage
                component='div'
                name='email'
                className='invalid-feedback'
              />
            </div>
            <div>
              <label htmlFor='password'>Password</label>
              <Field
                name='password'
                type='password'
                placeholder='Enter password'
                className={`${
                  touched.password && errors.password ? 'is-invalid' : ''
                }`}
                validate={validatePassword}
              />
              <ErrorMessage
                component='div'
                name='password'
                className='invalid-feedback'
              />
            </div>
            <button className='btn' type='submit'>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default Login
