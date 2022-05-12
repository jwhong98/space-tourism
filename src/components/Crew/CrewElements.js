import styled from "styled-components";
import desktopBG from "../../assets/crew/background-crew-desktop.jpg";

export const CrewContainer = styled.section`
  height: 100vh;
  width: 100vw;
  background-image: url(${desktopBG});
  background-size: cover;
  display: flex;
  overflow: hidden;
`;

export const CrewWrap = styled.div`
  width: 100%;
  height: 700px;
  max-width: 1110px;
  margin: 0 auto;
  margin-top: auto;
  color: #fff;
`;

export const CrewContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CrewText = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 94px;

  h2 {
    font-family: "Barlow Condensed", sans-serif;
    font-size: 28px;
    font-weight: 400;
    letter-spacing: 4.72px;
    text-transform: uppercase;
    justify-content: flex-start;

    span {
      color: #979797;
      font-weight: bold;
    }
  }
`;

export const CrewInfo = styled.article`
  font-family: "Bellefair", serif;
  text-transform: uppercase;
  /* width: 614px; */
  .role {
    font-size: 32px;
    color: #979797;
    margin-bottom: 15px;
  }
  .name {
    font-size: 56px;
    margin-bottom: 27px;
  }
  .bio {
    font-family: "Barlow", sans-serif;
    color: #d0d6f9;
    text-transform: none;
    font-size: 18px;
    max-width: 444px;
    line-height: 32px;
  }
`;

export const CrewImg = styled.div`
  height: 100%;
  display: flex;
  img {
    margin-top: auto;
    max-width: 100%;
    max-height: 100%;
  }
`;
