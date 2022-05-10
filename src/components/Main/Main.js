import React from "react";
import Destination from "../Destination/Destination";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import { MainContainer } from "./MainElements";

const Main = () => {
  return (
    <MainContainer>
      <Navbar />
      {/* <Home /> */}
      <Destination />
    </MainContainer>
  );
};

export default Main;
