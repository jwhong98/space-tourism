import React, { useState } from "react";
import { SelectList } from "./DestinationSelectElements";

const DestinationSelect = (props) => {
  const [active, setActive] = useState("0");
  const onClickHandler = (e) => {
    setActive(e.target.dataset.value);
    let selection = Number(e.target.dataset.value);
    props.selectHandler(selection);
  };
  return (
    <SelectList>
      <li
        className={active === "0" ? "selected" : ""}
        data-value="0"
        onClick={onClickHandler}
      >
        moon
      </li>
      <li
        className={active === "1" ? "selected" : ""}
        data-value="1"
        onClick={onClickHandler}
      >
        mars
      </li>
      <li
        className={active === "2" ? "selected" : ""}
        data-value="2"
        onClick={onClickHandler}
      >
        europa
      </li>
      <li
        className={active === "3" ? "selected" : ""}
        data-value="3"
        onClick={onClickHandler}
      >
        titan
      </li>
    </SelectList>
  );
};

export default DestinationSelect;
