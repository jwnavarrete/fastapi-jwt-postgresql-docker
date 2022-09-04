// project imports
import react, { useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./Main";
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

      <Sidebar></Sidebar>

      <Main />

      <Footer />
    </MainContainer>
  );
};

export default MainLayout;
