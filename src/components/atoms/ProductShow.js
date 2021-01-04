import React from "react";
import styled, { css } from "styled-components";
import { mainTheme } from "../../GlobalStyles/theme/mainTheme";
// import img from "../../assets/images/canon24.jpg";

const ProductsWrapper = styled.div`
  position: relative;
  width: 350px;
  height: 200px;
  /* background-color: ${({ bgColor }) => bgColor}; */
  background-color: transparent;
  z-index: 0;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 30% 55% 40% 0%;

    content: "";
    width: 98%;
    height: 80%;
    background-color: ${({ beforeColor }) => beforeColor};
    z-index: 1;
  }
`;
const ProductImage = styled.img`
  position: absolute;
  height: 100%;
  z-index: 2;
`;

const ProductShow = ({ img, beforeColor, bgColor }) => {
  return (
    <ProductsWrapper beforeColor={beforeColor} bgColor={bgColor}>
      <ProductImage src={img}></ProductImage>
    </ProductsWrapper>
  );
};

export default ProductShow;
