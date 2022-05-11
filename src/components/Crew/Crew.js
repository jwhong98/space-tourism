import React, { useState } from "react";
import {
  CrewContainer,
  CrewWrap,
  CrewContent,
  CrewText,
  CrewInfo,
  CrewImg,
} from "./CrewElements";
import data from "../../data.json";
import CrewSelection from "./CrewSelection";

const Crew = () => {
  const [select, setSelect] = useState(0);
  const crew = data.crew[select];
  const onSelect = (selection) => {
    setSelect(selection);
  };
  return (
    <CrewContainer>
      <CrewWrap>
        <CrewContent>
          <CrewText>
            <h2>
              <span>02</span> meet your crew
            </h2>
            <CrewInfo>
              <p className="role">{crew.role}</p>
              <p className="name">{crew.name}</p>
              <p className="bio">{crew.bio}</p>
            </CrewInfo>
            <CrewSelection onSelect={onSelect} />
          </CrewText>
          <CrewImg>
            <img src={crew.images.png} alt="" />
          </CrewImg>
        </CrewContent>
      </CrewWrap>
    </CrewContainer>
  );
};

export default Crew;
