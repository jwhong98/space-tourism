import React from "react";
import {
  CrewContainer,
  CrewWrap,
  CrewContent,
  CrewText,
  CrewInfo,
  CrewImg,
} from "./CrewElements";
import img from "../../assets/crew/image-douglas-hurley.png";
import data from "../../data.json";
import CrewSelection from "./CrewSelection";

const Crew = () => {
  const crew = data.crew[0];
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
            <CrewSelection />
          </CrewText>
          <CrewImg>
            <img src={img} alt="" />
          </CrewImg>
        </CrewContent>
      </CrewWrap>
    </CrewContainer>
  );
};

export default Crew;
