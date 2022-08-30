import React from 'react'
import './style.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup
  .object()
  .shape({
    email: yup.string().required(),
    password: yup.number().required()
  })
  .required()

const LoginDemo = () => {
  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    console.log(data)
    console.log(errors)
  }

  return (
    <>
      <h1>Login with react-hook-form</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input type='text' placeholder='Enter email' {...register('email')} />
        {/* {errors['email'] && <p>errors['email'].message</p>} */}
        <input
          type='password'
          placeholder='Enter password'
          {...register('password')}
        />
        <button className='btn' type='submit'>
          Submit
        </button>
      </form>
    </>
  )
}

export default LoginDemo
