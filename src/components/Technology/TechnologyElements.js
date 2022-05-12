import styled from "styled-components";
import desktopBG from "../../assets/technology/background-technology-desktop.jpg";

export const TechContainer = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: url(${desktopBG});
  background-size: cover;
  display: flex;
`;

export const TechWrap = styled.div`
  width: 100%;
  padding-left: 167px;
  height: 700px;
  margin: auto 0 0 auto;
  color: #fff;
`;

export const TechContent = styled.article`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 101px;
`;

export const TechTextWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

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

export const TechText = styled.div`
  margin: auto 0;
  display: flex;
  gap: 80px;
`;

export const TechInfo = styled.div`
  .subtitle {
    font-family: "Barlow Condensed", sans-serif;
    font-size: 16px;
    letter-spacing: 2.7px;
    color: #d0d6f9;
    text-transform: uppercase;
    margin-bottom: 11px;
  }

  .name {
    font-family: "Bellefair", serif;
    font-size: 56px;
    text-transform: uppercase;
    margin-bottom: 17px;
  }

  .description {
    font-family: "Barlow", sans-serif;
    font-size: 18px;
    line-height: 32px;
    color: #d0d6f9;
    max-width: 444px;
  }
`;

export const TechImg = styled.div``;
