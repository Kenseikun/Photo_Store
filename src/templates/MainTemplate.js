import React from "react";
import NavBar from "../components/navigations/NavBar";

const MainTemplate = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default MainTemplate;
