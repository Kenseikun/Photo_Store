import React from "react";
import NavBar from "../components/navigations/NavBar";
import Cart from "../components/organisms/Cart";
import ProductsDropDown from "../components/organisms/ProductsDropDown";

const MainTemplate = ({ children }) => {
  return (
    <>
      <NavBar />
      <Cart />
      <ProductsDropDown />
      {children}
    </>
  );
};

export default MainTemplate;
