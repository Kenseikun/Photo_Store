import React from "react";
import styled, { css } from "styled-components";

/* background-color: ${({cameras, lenses, speedlights, theme}) => (cameras ? theme.colors.red : lenses ? theme.colors.yellow : speedlights ? theme.colors.blue)}; */

const ProductsWrapper = styled.div`
  position: relative;
  /* width: 350px; */
  width: ${({ isInBasket }) => (isInBasket ? "500px" : "250px")};

  height: 120px;

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
    /* background-color: red; */

    background-color: ${({ type, theme }) =>
      type === "cameras"
        ? theme.colors.red
        : type === "lenses"
        ? theme.colors.yellow
        : theme.colors.blue};

    z-index: 1;
  }

  ${({ inCart }) =>
    inCart &&
    css`
      width: 200px;
    `}
`;
const ProductImage = styled.img`
  position: absolute;
  height: 100%;
  z-index: 2;
`;

const ProductShow = ({ type, img, inBasket, inCart }) => {
  return (
    <ProductsWrapper type={type} isInBasket={inBasket} inCart={inCart}>
      <ProductImage src={img}></ProductImage>
    </ProductsWrapper>
  );
};

export default ProductShow;
