import React from "react";
import { MdHome, MdFavoriteBorder, MdPersonOutline } from "react-icons/md";

import { Nav, NavLink, navIconSize } from "./styles";
import { useLocation, useParams } from "react-router-dom";

export const NavBar = () => {
  const { pathname } = useLocation();
  const isPathActive = (path) => {
    return path === pathname ? "activePath" : "inactivePath";
  };
  return (
    <Nav>
      <NavLink to="/" className={isPathActive("/")}>
        <MdHome size={navIconSize} />
      </NavLink>
      <NavLink to="/favs" className={isPathActive("/favs")}>
        <MdFavoriteBorder size={navIconSize} />
      </NavLink>
      <NavLink to="/user" className={isPathActive("/user")}>
        <MdPersonOutline size={navIconSize} />
      </NavLink>
    </Nav>
  );
};
