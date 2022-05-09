import React from "react";
import { Nav, MenuContainer, NavMenu, MenuItem } from "./NavbarElements";
import logo from "../../assets/shared/logo.svg";

const Navbar = () => {
  return (
    <Nav>
      <img src={logo} alt="logo" />
      <hr />
      <MenuContainer>
        <NavMenu>
          <MenuItem>
            <span>00</span> home
          </MenuItem>
          <MenuItem>
            <span>01</span> destination
          </MenuItem>
          <MenuItem>
            <span>02</span> crew
          </MenuItem>
          <MenuItem>
            <span>03</span> technology
          </MenuItem>
        </NavMenu>
      </MenuContainer>
    </Nav>
  );
};

export default Navbar;
