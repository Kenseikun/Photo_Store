import React from "react";
import styled from "styled-components";
import Button from "../atoms/Button";
import ProductShow from "../atoms/ProductShow";

const DisplayProductWrapper = styled.div`
  /* display: flex; */
`;
const DisplayDetailsWrapper = styled.div``;
const DisplayProductPrice = styled.p``;
const DisplayProductName = styled.p``;
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
        <DisplayProductPrice>{productPrice}</DisplayProductPrice>
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
