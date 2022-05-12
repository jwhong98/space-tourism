import React, { useState } from "react";
import { TechSelectList } from "./TechSelectionElements";

const TechSelection = (props) => {
  const [active, setActive] = useState("0");
  const onClickHandler = (e) => {
    setActive(e.target.dataset.value);
    props.onSelectHandler(Number(e.target.dataset.value));
  };
  return (
    <TechSelectList>
      <li>
        <button
          className={active === "0" ? "active" : ""}
          data-value="0"
          onClick={onClickHandler}
        >
          1
        </button>
      </li>
      <li>
        <button
          className={active === "1" ? "active" : ""}
          data-value="1"
          onClick={onClickHandler}
        >
          2
        </button>
      </li>
      <li>
        <button
          className={active === "2" ? "active" : ""}
          data-value="2"
          onClick={onClickHandler}
        >
          3
        </button>
      </li>
    </TechSelectList>
  );
};

export default TechSelection;
