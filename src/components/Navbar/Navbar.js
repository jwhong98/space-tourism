import React, { useState } from "react";
import {
  Nav,
  MenuContainer,
  NavMenu,
  MenuItem,
  StyledLink,
} from "./NavbarElements";
import logo from "../../assets/shared/logo.svg";

const Navbar = (props) => {
  const [active, setActive] = useState("home");
  const onClickHandler = (e) => {
    setActive(e.target.dataset.value);
    console.log(e.target.dataset.value);
    props.pageHandler(e.target.dataset.value);
  };
  return (
    <Nav>
      <img src={logo} alt="logo" />
      <hr />
      <MenuContainer>
        <NavMenu>
          <MenuItem>
            <StyledLink
              to="/"
              onClick={onClickHandler}
              data-value="home"
              className={active === "home" ? "selected" : ""}
            >
              <span>00</span> home
            </StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink
              to="/destination"
              className={active === "destination" ? "selected" : ""}
              data-value="destination"
              onClick={onClickHandler}
            >
              <span>01</span> destination
            </StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink
              to="/crew"
              className={active === "crew" ? "selected" : ""}
              data-value="crew"
              onClick={onClickHandler}
            >
              <span>02</span> crew
            </StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink
              to="/technology"
              className={active === "technology" ? "selected" : ""}
              data-value="technology"
              onClick={onClickHandler}
            >
              <span>03</span> technology
            </StyledLink>
          </MenuItem>
        </NavMenu>
      </MenuContainer>
    </Nav>
  );
};

export default Navbar;
