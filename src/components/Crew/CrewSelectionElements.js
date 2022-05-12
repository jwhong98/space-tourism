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
    background: #fff;
    opacity: 0.1744;
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
  }

  .active {
    opacity: 1;
  }
`;
