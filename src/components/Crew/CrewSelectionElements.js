import styled from "styled-components";

export const Selection = styled.ul`
  list-style: none;
  display: flex;
  gap: 24px;

  button {
    width: 15px;
    height: 15px;
    border: none;
    outline: none;
    border-radius: 50%;
    background: #979797;
  }

  .active {
    background: #fff;
  }
`;
