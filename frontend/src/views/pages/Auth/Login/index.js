import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import qs from 'qs'
import axios from 'axios'
import {
  AuthContainer,
  Title1,
  Title2,
  Container,
  FormLogin,
  AutInput,
  SignInContainer,
  OverlayContainer,
  Overlay,
  OverlayPanelLeft,
  OverlayPanelRight,
  Paragraph,
  Button,
  Footer,
  Link
} from './components'

const Login = () => {
  const navigate = useNavigate()

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
          navigate('/recargo')
        }
      })
      .catch(error => {
        console.log(`Este es un error de la peticion: ${error}`)
      })
  }

  return (
    <>
      <AuthContainer>
        <Title2>Formulario inicio de sesi&oacute;n</Title2>
        <Container>
          <SignInContainer>
            <FormLogin onSubmit={handleSubmit(onSubmit)}>
              <Title1>Ingreso</Title1>
              <Paragraph>ingresa tu usuario y contrase&ntilde;a</Paragraph>
              <AutInput
                type='username'
                placeholder='Username'
                {...register('username')}
              />
              <ErrorMessage errors={errors} name='username' as='p' />
              <AutInput
                type='password'
                placeholder='Password'
                {...register('password')}
              />
              <ErrorMessage errors={errors} name='password' as='p' />
              <Link href='#'>Olvidaste tu contrase&ntilde;a?</Link>
              <Button type='submit'>Ingresar</Button>
            </FormLogin>
          </SignInContainer>
          <OverlayContainer>
            <Overlay>
              <OverlayPanelLeft>
                <Title1>Welcome Back!</Title1>
                <Paragraph>
                  To keep connected with us please login with your personal info
                </Paragraph>
                <Button className='ghost' id='signIn'>
                  Sign In
                </Button>
              </OverlayPanelLeft>
              <OverlayPanelRight>
                <Title1>Tarificador</Title1>
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
