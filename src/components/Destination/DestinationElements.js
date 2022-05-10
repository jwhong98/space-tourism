import styled from "styled-components";
import desktopBG from "../../assets/destination/background-destination-desktop.jpg";

export const DestinationContainer = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: url(${desktopBG});
  background-size: cover;
  display: flex;
`;

export const DestinationWrap = styled.div`
  width: 100%;
  max-width: 1110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  margin-top: 40px;
  color: #fff;
  gap: 64px;
  text-transform: uppercase;

  h2 {
    font-family: "Barlow Condensed", sans-serif;
    font-size: 28px;
    letter-spacing: 4.72px;
    font-weight: 400;

    span {
      font-weight: bold;
      margin-right: 28px;
    }
  }
`;

export const ContentWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  gap: 157px;
`;

export const ContentImg = styled.div``;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 37px;
  max-width: 445px;

  .planet {
    font-family: "Bellefair", serif;
    font-size: 100px;
  }

  .description {
    text-transform: none;
    font-family: "Barlow", sans-serif;
    font-size: 18px;
    line-height: 32px;
    color: #d0d6f9;
  }
`;

export const DestinationTravel = styled.div`
  width: 100%;
  display: flex;
  gap: 79px;
`;

export const TravelInfo = styled.div`
  span {
    font-family: "Barlow Condensed", sans-serif;
    font-size: 14px;
    letter-spacing: 2.36px;
    color: #d0d6f9;
  }

  p {
    margin-top: 12px;
    font-family: "Bellefair", serif;
    font-size: 28px;
  }
`;
