import React from "react";
import Img from "@components/ui/Img";
import Logo from "@assets/images/icons/logo.svg";
import { FiDisc } from "react-icons/fi";

import {
  Navbar_Header,
  Navbar_Nav,
  Nav_Item,
  Navbar_Brand,
  Brand_Logo,
  Brand_Text,
  Modern_Nav_Toggle,
} from "./components";

const index = () => {
  return (
    <Navbar_Header>
      <Navbar_Nav>
        <Nav_Item mrauto>
          <Navbar_Brand>
            <Brand_Logo>
              <Img src={Logo} alt="logo" />
            </Brand_Logo>
            <Brand_Text>Generali</Brand_Text>
          </Navbar_Brand>
        </Nav_Item>
        <Nav_Item>
          <Modern_Nav_Toggle>
            <FiDisc />
          </Modern_Nav_Toggle>
        </Nav_Item>
      </Navbar_Nav>
    </Navbar_Header>
  );
};

export default index;
