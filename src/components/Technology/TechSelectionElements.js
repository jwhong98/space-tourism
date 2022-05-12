import styled from "styled-components";

export const TechSelectList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  button {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: transparent;
    color: #fff;
    font-family: "Bellefair", serif;
    font-size: 32px;
    letter-spacing: 2px;
    border: 1px solid #979797;
  }

  .active {
    color: black;
    background: #fff;
    border: none;
  }
`;
