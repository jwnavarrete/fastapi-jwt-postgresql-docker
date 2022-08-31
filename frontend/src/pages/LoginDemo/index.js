import React from 'react'
import './style.css'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message';
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
        <input
          type='password'
          placeholder='Enter password'
          {...register('password')}
        />
        <ErrorMessage errors={errors} name="email" />
        <button className='btn' type='submit'>
          Submit
        </button>
      </form>
    </>
  )
}

export default LoginDemo
