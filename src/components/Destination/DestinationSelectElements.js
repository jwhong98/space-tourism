import styled from "styled-components";

export const SelectList = styled.ul`
  list-style: none;
  display: flex;
  gap: 36px;
  font-family: "Barlow Condensed", sans-serif;
  font-size: 16px;
  color: #d0d6f9;

  li {
    letter-spacing: 2.7px;
    cursor: pointer;
    padding-bottom: 12px;

    &:hover {
      border-bottom: 3px solid #979797;
    }
  }

  .selected {
    color: #fff;
    border-bottom: 3px solid #fff;
  }
`;
