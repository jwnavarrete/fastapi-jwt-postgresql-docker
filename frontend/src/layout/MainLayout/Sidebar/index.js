import React from "react";
import { Sidebar } from "./components";
import NavHeader from "./NavHeader";

const index = (props) => {
  return (
    <Sidebar>
      <NavHeader />
      Este es Sidebar
      {props.children}
    </Sidebar>
  );
};

export default index;
