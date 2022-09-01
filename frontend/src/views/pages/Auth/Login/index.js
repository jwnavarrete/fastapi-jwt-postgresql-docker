import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { yupResolver } from '@hookform/resolvers/yup'
import AuthService from '@services/AuthService'
import * as yup from 'yup'
import qs from 'qs'
import axios from 'axios'
import Button from '@components/ui/Button'
import Input from '@components/ui/Input'
import Error from '@components/ui/Error'
import Title from '@components/ui/Title'

import {
  AuthContainer,
  Title2,
  Container,
  FormLogin,
  SignInContainer,
  OverlayContainer,
  Overlay,
  OverlayPanelLeft,
  OverlayPanelRight,
  Paragraph,
  Footer,
  Link
} from './components'

const Login = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (AuthService.isLoggedIn()) {
      navigate('/')
    }
  }, [])

  const schema = yup
    .object()
    .shape({
      username: yup.string().required('el campo usuario es obligatorio'),
      password: yup.string().required('el campo contrasena es obligatorio')
    })
    .required()

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    axios
      .post(
        'http://localhost:8000/auth/login',
        qs.stringify({
          username: data.username,
          password: data.password
        }),
        {
          headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }
      )
      .then(response => {
        if (response.status === 200) {
          const { data } = response

          AuthService.setToken(data.access_token)
          navigate('/')
        }
      })
      .catch(error => {
        window.alert('Credenciales incorreectas')
      })
  }

  return (
    <>
      <AuthContainer>
        <Title2>Formulario inicio de sesi&oacute;n</Title2>
        <Container>
          <SignInContainer>
            <FormLogin onSubmit={handleSubmit(onSubmit)}>
              <Title>Ingreso</Title>
              <Paragraph>ingresa tu usuario y contrase&ntilde;a</Paragraph>
              <Input
                type='username'
                placeholder='Username'
                name='username'
                register={register}
              />
              <ErrorMessage
                errors={errors}
                name='username'
                render={({ message }) => <Error>{message}</Error>}
              />
              <Input
                type='password'
                placeholder='Password'
                name="password"
                register={register}
              />
              <ErrorMessage
                errors={errors}
                name='password'
                render={({ message }) => <Error>{message}</Error>}
              />
              <Link href='#'>Olvidaste tu contrase&ntilde;a?</Link>
              <Button type='submit' color='primary'>Ingresar</Button>
            </FormLogin>
          </SignInContainer>
          <OverlayContainer>
            <Overlay>
              <OverlayPanelLeft>
                <Title>Welcome Back!</Title>
                <Paragraph>
                  To keep connected with us please login with your personal info
                </Paragraph>
                <Button className='ghost' id='signIn'>
                  Sign In
                </Button>
              </OverlayPanelLeft>
              <OverlayPanelRight>
                <Title>Tarificador</Title>
                <Paragraph>Esto es una leyenda</Paragraph>
              </OverlayPanelRight>
            </Overlay>
          </OverlayContainer>
        </Container>

        {/* <Footer>
          <Paragraph>
            � Copyright 2018 - Generali Ecuador Compa&ntilde;ia de Seguros S.A.
            *V.1.0.1.4
          </Paragraph>
        </Footer> */}
      </AuthContainer>
    </>
  )
}

export default Login
