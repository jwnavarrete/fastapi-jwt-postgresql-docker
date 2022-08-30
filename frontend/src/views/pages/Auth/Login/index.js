import React from "react";
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
  Link,
} from "./components";

const Login = () => {
  return (
    <>
      <AuthContainer>
        <Title2>Formulario inicio de sesi&oacute;n</Title2>
        <Container>
          <SignInContainer>
            <FormLogin action="#">
              <Title1>Ingreso</Title1>
              <Paragraph>ingresa tu usuario y contrase&ntilde;a</Paragraph>
              <AutInput type="email" placeholder="Email" />
              <AutInput type="password" placeholder="Password" />
              <Link href="#">Olvidaste tu contrase&ntilde;a?</Link>
              <Button>Ingresar</Button>
            </FormLogin>
          </SignInContainer>
          <OverlayContainer>
            <Overlay>
              <OverlayPanelLeft>
                <Title1>Welcome Back!</Title1>
                <Paragraph>
                  To keep connected with us please login with your personal info
                </Paragraph>
                <Button className="ghost" id="signIn">
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

        <Footer>
          <Paragraph>
            © Copyright 2018 - Generali Ecuador Compa&ntilde;ia de Seguros S.A.
            *V.1.0.1.4
          </Paragraph>
        </Footer>
      </AuthContainer>
    </>
  );
};

export default Login;
