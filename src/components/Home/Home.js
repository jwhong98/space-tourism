import React from "react";
import {
  HomeContainer,
  HomeWrapper,
  HomeText,
  HomeExplore,
} from "./HomeElements";

const Home = () => {
  return (
    <HomeContainer>
      <HomeWrapper>
        <HomeText>
          <h5>so, you want to travel to</h5>
          <span>space</span>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </HomeText>
        <HomeExplore>EXPLORE</HomeExplore>
      </HomeWrapper>
    </HomeContainer>
  );
};

export default Home;
