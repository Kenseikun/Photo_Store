import React from "react";
import Logo from "./components/atoms/Logo";
import ProductShow from "./components/atoms/ProductShow";
import { mainTheme } from "./GlobalStyles/theme/mainTheme";
import img from "./assets/images/sonya7.jpg";

const Test = () => {
  return (
    <div>
      <Logo cameras></Logo>
      <ProductShow
        img={img}
        bgColor={mainTheme.colors.violet}
        beforeColor={mainTheme.colors.blue}
        inBasket
      ></ProductShow>
    </div>
  );
};

export default Test;
