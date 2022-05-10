import React, { useState } from "react";
import Destination from "../Destination/Destination";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import { MainContainer } from "./MainElements";

const Main = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  const pageHandler = (page) => {
    setSelectedPage(page);
  };
  return (
    <MainContainer>
      <Navbar pageHandler={pageHandler} />
      {selectedPage === "home" && <Home />}
      {selectedPage === "destination" && <Destination />}
    </MainContainer>
  );
};

export default Main;
