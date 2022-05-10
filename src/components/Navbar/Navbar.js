import React, { useState } from "react";
import { Nav, MenuContainer, NavMenu, MenuItem } from "./NavbarElements";
import logo from "../../assets/shared/logo.svg";

const Navbar = (props) => {
  const [active, setActive] = useState("home");
  const onClickHandler = (e) => {
    setActive(e.target.dataset.value);
    props.pageHandler(e.target.dataset.value);
  };
  return (
    <Nav>
      <img src={logo} alt="logo" />
      <hr />
      <MenuContainer>
        <NavMenu>
          <MenuItem
            className={active === "home" ? "selected" : ""}
            data-value="home"
            onClick={onClickHandler}
          >
            <span>00</span> home
          </MenuItem>
          <MenuItem
            className={active === "destination" ? "selected" : ""}
            data-value="destination"
            onClick={onClickHandler}
          >
            <span>01</span> destination
          </MenuItem>
          <MenuItem
            className={active === "crew" ? "selected" : ""}
            data-value="crew"
            onClick={onClickHandler}
          >
            <span>02</span> crew
          </MenuItem>
          <MenuItem
            className={active === "technology" ? "selected" : ""}
            data-value="technology"
            onClick={onClickHandler}
          >
            <span>03</span> technology
          </MenuItem>
        </NavMenu>
      </MenuContainer>
    </Nav>
  );
};

export default Navbar;
