// project imports
import react, { useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./Main";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AuthService from "@services/AuthService";
import { useNavigate } from "react-router-dom";
import { MainContainer } from "./components";
// import navigation from 'menu-items';
// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!AuthService.isLoggedIn()) {
      navigate("auth/login");
    }
  }, []);

  return (
    <MainContainer>
      <Header />

      <Sidebar>
        <Navbar />
      </Sidebar>

      <Main />

      <Footer />
    </MainContainer>
  );
};

export default MainLayout;
