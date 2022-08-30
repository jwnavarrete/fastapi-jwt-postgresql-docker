import React from 'react'
import './style.css'
import { useForm } from 'react-hook-form'

const LoginDemo = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = values => {
    // form is valid
    console.log(values)
  }

  return (
    <>
      <h1>Login with react-hook-form</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name='email'
          placeholder='Enter email'
        />        
        {/* <ErrorMessage className="invalid-feedback" name="email" as="div" errors={errors} /> */}
        <button className='btn' type='submit'>
          Submit
        </button>
      </form>
    </>
  )
}

export default LoginDemo
