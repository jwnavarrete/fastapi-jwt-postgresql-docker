import React from "react";
import { AuthContainer, Title2, Container } from "./components";

const Login = () => {
  return (
    <>
      <AuthContainer>
        <Title2>Formulario inicio de sesión</Title2>
        <Container>
          <div className="form-container sign-in-container">
            <form action="#">
              <h1>Ingreso</h1>
              <p>ingresa tu usuario y contraseña</p>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="#">¿Olvidaste tu contraseña?</a>
              <button>Ingresar</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button className="ghost" id="signIn">
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Tarificador</h1>
                <p>Esto es una leyenda</p>
              </div>
            </div>
          </div>
        </Container>

        <footer>
          <p>
            © Copyright 2018 - Generali Ecuador Compañia de Seguros S.A.
            *V.1.0.1.4
          </p>
        </footer>
      </AuthContainer>
    </>
  );
};

export default Login;
