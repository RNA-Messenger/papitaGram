import styled from "styled-components";
import { Link } from "react-router-dom";
import { fadeIn } from "../../styles/animations";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 3;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
  height: 50px;
  background: #fcfcfc;
  border-top: 1px solid #e0e0ee;
`;

export const NavLink = styled(Link)`
  color: #888;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 100%;
  width: 100%;
  &.activePath {
    color: #000;
    &::after {
      ${fadeIn({ time: "0.5s" })}
      content: ".";
      position: absolute;
      bottom: 10px;
      left: auto;
      right: auto;
      font-size: 34px;
      line-height: 20px;
    }
  }
`;

export const navIconSize = "32px";
