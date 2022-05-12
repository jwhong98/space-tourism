import React, { useState } from "react";
import TechSelection from "./TechSelection";
import {
  TechContainer,
  TechWrap,
  TechContent,
  TechTextWrap,
  TechText,
  TechInfo,
  TechImg,
} from "./TechnologyElements";
import data from "../../data.json";

const Technology = () => {
  const [select, setSelect] = useState(0);
  const tech = data.technology[select];
  const onSelectHandler = (selection) => {
    setSelect(selection);
  };
  return (
    <TechContainer>
      <TechWrap>
        <TechContent>
          <TechTextWrap>
            <h2>
              <span>03</span> space launch 101
            </h2>
            <TechText>
              <TechSelection onSelectHandler={onSelectHandler} />
              <TechInfo>
                <p className="subtitle">the terminology...</p>
                <p className="name">{tech.name}</p>
                <p className="description">{tech.description}</p>
              </TechInfo>
            </TechText>
          </TechTextWrap>
          <TechImg>
            <img src={tech.images.portrait} alt="" />
          </TechImg>
        </TechContent>
      </TechWrap>
    </TechContainer>
  );
};

export default Technology;
