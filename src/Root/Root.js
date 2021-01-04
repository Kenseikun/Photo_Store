import React, { useState, useEffect } from "react";
import axios from "axios";
import RootContext from "../context";
import { localData } from "../localData";
import { mainTheme } from "../GlobalStyles/theme/mainTheme";
import Logo from "../components/atoms/Logo";
import ProductShow from "../components/atoms/ProductShow";
import img from "../assets/images/sonya7.jpg";

const Root = () => {
  const [initialProducts, setInitialProducts] = useState([...localData]);
  const [products, setProducts] = useState([...localData]);
  return (
    <>
      <RootContext.Provider value={{ products, mainTheme }}>
        <Logo></Logo>
        <ProductShow
          img={img}
          bgColor={mainTheme.colors.violet}
          beforeColor={mainTheme.colors.blue}
        ></ProductShow>
      </RootContext.Provider>
    </>
  );
};

export default Root;
