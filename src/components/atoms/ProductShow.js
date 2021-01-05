import React from "react";
import styled, { css } from "styled-components";

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
  overflow: hidden;

  &::before {
    position: absolute;
    bottom: -20%;
    left: 0;
    border-radius: 40% 55% 40% 0%;

    content: "";
    width: 98%;
    height: 100%;
    background-color: ${({cameras, lenses, speedlights, theme}) => (cameras ? theme.colors.red : lenses ? theme.colors.yellow : speedlights ? theme.colors.blue)};
    z-index: 1;
  }
`;
const ProductImage = styled.img`
  position: absolute;
  height: 100%;
  z-index: 2;
`;

const ProductShow = ({ color, img }) => {
  return (
    <ProductsWrapper {color}>
      <ProductImage src={img}></ProductImage>
    </ProductsWrapper>
  );
};

export default ProductShow;
