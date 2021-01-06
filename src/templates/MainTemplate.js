import React from "react";
import NavBar from "../components/navigations/NavBar";
import Cart from "../components/organisms/Cart";

const MainTemplate = ({ children }) => {
  return (
    <>
      <NavBar />
      <Cart />
      {children}
    </>
  );
};

export default MainTemplate;
