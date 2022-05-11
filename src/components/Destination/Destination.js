import React, { useState } from "react";
import DestinationSelect from "./DestinationSelect";
import {
  DestinationContainer,
  DestinationWrap,
  ContentWrap,
  ContentImg,
  ContentText,
  DestinationTravel,
  TravelInfo,
} from "./DestinationElements";
import data from "../../data.json";

const Destination = () => {
  const [planet, setPlanet] = useState(0);
  const destination = data.destinations[planet];
  const selectHandler = (position) => {
    setPlanet(position);
  };

  return (
    <DestinationContainer>
      <DestinationWrap>
        <h2>
          <span>01</span> pick your destination
        </h2>
        <ContentWrap>
          <ContentImg>
            <img src={destination.images.png} alt="" />
          </ContentImg>
          <ContentText>
            <DestinationSelect selectHandler={selectHandler} />
            <p className="planet">{destination.name}</p>
            <p className="description">{destination.description}</p>
            <hr />
            <DestinationTravel>
              <TravelInfo>
                <span>avg. distance</span>
                <p>{destination.distance}</p>
              </TravelInfo>
              <TravelInfo>
                <span>est. travel time</span>
                <p>{destination.travel}</p>
              </TravelInfo>
            </DestinationTravel>
          </ContentText>
        </ContentWrap>
      </DestinationWrap>
    </DestinationContainer>
  );
};

export default Destination;
