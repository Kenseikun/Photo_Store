import React, { useContext } from "react";
import RootContext from "../context";
import Button from "./atoms/Button";
import styled from "styled-components";

const StyledProductsWrapper = styled.ul`
  list-style: none;
`;

const StyledProduct = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  margin: 8px auto;
  padding: 4px;
  background-color: rgba(0, 0, 0, 0.2);
`;
const StyledProductName = styled.p`
  width: 180px;
  font-weight: 800;
`;

const StyledProductPrice = styled.p``;

const DisplayProductInPopper = () => {
  const context = useContext(RootContext);
  const {
    popperProducts,
    handleAddProductToCart,
    handleDuplicatesInCart,
  } = context;

  return (
    <StyledProductsWrapper>
      {popperProducts.map((product) => {
        const {
          productId,
          productName,
          productPrice,
          productCategory,
        } = product;
        return (
          <StyledProduct>
            <StyledProductName>{productName}</StyledProductName>
            <StyledProductPrice>{productPrice} PLN</StyledProductPrice>
            <Button
              type={productCategory}
              onClickFn={() => {
                handleDuplicatesInCart(productId);
                handleAddProductToCart(productId);
              }}
              productId={productId}
            >
              add product
            </Button>
          </StyledProduct>
        );
      })}
    </StyledProductsWrapper>
  );
};

export default DisplayProductInPopper;
