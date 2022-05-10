import styled from "styled-components";

export const Nav = styled.nav`
  height: 96px;
  width: 100%;
  position: fixed;
  top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  z-index: 30;

  img {
    margin-left: calc(100vw * 0.0382);
  }

  hr {
    width: calc(100vw * 0.3285);
    border: 1px solid rgba(151, 151, 151, 0.3);
    position: absolute;
    left: calc(100vw * 0.116);
    z-index: 31;
  }
`;

export const MenuContainer = styled.div`
  width: 57.6%;
  height: 100%;
  display: flex;
  align-items: center;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
`;

export const NavMenu = styled.ul`
  height: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 48px;
  margin-left: 14.8%;
  .selected {
    border-bottom: 3px solid #fff;
  }
`;

export const MenuItem = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
  font-family: "Barlow Condensed", sans-serif;
  text-transform: uppercase;
  letter-spacing: 2.7px;
  gap: 12px;
  font-size: 16px;
  cursor: pointer;
  border-bottom: 3px solid transparent;

  span {
    font-weight: bold;
  }
`;
