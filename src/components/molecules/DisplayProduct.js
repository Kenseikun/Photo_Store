import React from "react";
import styled from "styled-components";
import Button from "../atoms/Button";
import ProductShow from "../atoms/ProductShow";

const DisplayProductWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin: 10px;
`;
const DisplayDetailsWrapper = styled.div``;
const DisplayProductPrice = styled.p``;
const DisplayProductName = styled.p`
  /* font-family: ${({ theme }) => theme.fontFamily.extra}; */
  font-weight: bold;
`;
const DisplayProductDescription = styled.p``;

const DisplayProduct = ({
  productPrice,
  productName,
  productDescription,
  productCategory,
  productImage,
}) => {
  return (
    <DisplayProductWrapper>
      <ProductShow type={productCategory} img={productImage} />
      <DisplayDetailsWrapper>
        <DisplayProductPrice>{productPrice} PLN</DisplayProductPrice>
        <DisplayProductName>{productName}</DisplayProductName>
        <Button type={productCategory}>add product</Button>
        <DisplayProductDescription>
          {productDescription}
        </DisplayProductDescription>
      </DisplayDetailsWrapper>
    </DisplayProductWrapper>
  );
};

export default DisplayProduct;
