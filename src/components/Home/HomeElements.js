import styled from "styled-components";
import desktopBG from "../../assets/home/background-home-desktop.jpg";

export const HomeContainer = styled.section`
  height: 100vh;
  width: 100vw;
  background-image: url(${desktopBG});
  background-size: cover;
  display: flex;
`;

export const HomeWrapper = styled.div`
  width: 100%;
  max-width: 1110px;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0 auto 131px auto;
`;

export const HomeText = styled.div`
  max-width: 450px;
  color: #d0d6f9;
  display: flex;
  flex-direction: column;
  gap: 24px;
  h5 {
    font-family: "Barlow Condensed", sans-serif;
    font-size: 28px;
    letter-spacing: 4.75px;
    text-transform: uppercase;
  }

  span {
    font-size: 150px;
    color: #fff;
    font-family: "Bellefair", serif;
    font-weight: 400;
    text-transform: uppercase;
  }

  p {
    font-size: 18px;
    line-height: 32px;
    font-family: "Barlow", sans-serif;
  }
`;

export const HomeExplore = styled.button`
  height: 274px;
  width: 274px;
  background: #fff;
  border-radius: 50%;
  border: none;
  outline: none;
  font-size: 32px;
  font-family: "Bellefair", serif;
  letter-spacing: 2px;
  cursor: pointer;
`;
