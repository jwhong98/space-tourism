import React, { useState } from "react";
import Crew from "../Crew/Crew";
import Destination from "../Destination/Destination";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import Technology from "../Technology/Technology";
import { MainContainer } from "./MainElements";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Main = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  const pageHandler = (page) => {
    setSelectedPage(page);
  };
  return (
    <BrowserRouter>
      <MainContainer>
        <Navbar pageHandler={pageHandler} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
        {/* {selectedPage === "home" && }
        {selectedPage === "destination" && <Destination />}
        {selectedPage === "crew" && <Crew />}
        {selectedPage === "technology" && <Technology />} */}
      </MainContainer>
    </BrowserRouter>
  );
};

export default Main;
