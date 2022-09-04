import React from "react";
import { Sidebar, Navigation, NavigationHeader } from "./components";
import NavHeader from "./NavHeader";
import Span from "@components/ui/Span";
import { useLocation } from "react-router-dom";

import {
  BiDotsHorizontalRounded,
  BiHome,
  BiBarChartAlt2,
  BiKey,
  BiGridSmall,
  BiLogOutCircle,
} from "react-icons/bi";

import NavItem from "./NavItem";
import NavItemSub from "./NavItemSub";
import AuthService from "@services/AuthService";

const index = (props) => {
  const pathname = useLocation().pathname;
  console.log(pathname);

  const handleLogout = () => {
    AuthService.logout();
  };

  const isActive = (to) => {
    return to === pathname ? "active" : "";
  };

  return (
    <Sidebar>
      <NavHeader />
      {props.children}

      <Navigation>
        {/* Navigation Header */}
        <NavigationHeader>
          <Span>APPS & PAGES</Span>
          <BiDotsHorizontalRounded />
        </NavigationHeader>

        {/* Menu Nav Item */}
        <NavItem
          title="Home"
          icon={<BiHome />}
          to={"/"}
          active={isActive("/")}
        />

        <NavItemSub title="Mantenimiento" icon={<BiKey />} to={""}>
          <NavItem
            title="Recargo"
            icon={<BiGridSmall />}
            to={"/recargo"}
            active={isActive("/recargo")}
          />
        </NavItemSub>

        <NavItem
          title="Ejemplo"
          icon={<BiHome />}
          to={"/sample-page"}
          active={isActive("/sample-page")}
        />

        <NavigationHeader>
          <Span>OTHERS</Span>
          <BiDotsHorizontalRounded />
        </NavigationHeader>

        <NavItem
          title="Logout"
          icon={<BiLogOutCircle />}
          to={"/auth/login"}
          onClick={handleLogout}
        />
      </Navigation>
    </Sidebar>
  );
};

export default index;
