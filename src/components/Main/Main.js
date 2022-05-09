import React from "react";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import { MainContainer } from "./MainElements";

const Main = () => {
  return (
    <MainContainer>
      <Navbar />
      <Home />
    </MainContainer>
  );
};

export default Main;
