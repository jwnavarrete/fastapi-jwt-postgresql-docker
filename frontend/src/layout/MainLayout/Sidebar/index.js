import React from "react";
// import styled, { useTheme } from "styled-components";
import { FiDisc } from "react-icons/fi";

import {
  Sidebar,
  Navbar_Header,
  Navbar_Nav,
  Nav_Item,
  Navbar_Brand,
  Brand_Logo,
  Brand_Text,
  Modern_Nav_Toggle,
} from "./components";

const index = (props) => {
  //   const theme = useTheme();
  //   console.log("Current theme: ", theme);

  return (
    <Sidebar>
      <Navbar_Header>
        <Navbar_Nav>
          <Nav_Item mrauto>
            <Navbar_Brand>
              <Brand_Logo>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/196/196555.png"
                  alt="logo"
                />
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
      Este es Sidebar
      {props.children}
    </Sidebar>
  );
};

export default index;
