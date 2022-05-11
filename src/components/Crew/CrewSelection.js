import React, { useState } from "react";
import { Selection } from "./CrewSelectionElements";

const CrewSelection = (props) => {
  const [active, setActive] = useState("0");
  const onClickHandler = (e) => {
    setActive(e.target.dataset.value);
    props.onSelect(Number(e.target.dataset.value));
  };
  return (
    <Selection>
      <li>
        <button
          className={active === "0" ? "active" : ""}
          data-value="0"
          onClick={onClickHandler}
        ></button>
      </li>
      <li>
        <button
          className={active === "1" ? "active" : ""}
          data-value="1"
          onClick={onClickHandler}
        ></button>
      </li>
      <li>
        <button
          className={active === "2" ? "active" : ""}
          data-value="2"
          onClick={onClickHandler}
        ></button>
      </li>
      <li>
        <button
          className={active === "3" ? "active" : ""}
          data-value="3"
          onClick={onClickHandler}
        ></button>
      </li>
    </Selection>
  );
};

export default CrewSelection;
