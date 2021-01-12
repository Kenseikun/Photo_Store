import React, { useContext } from "react";
import styled from "styled-components";
import RootContext from "../../context";
import Button from "../atoms/Button";
import ProductShow from "../atoms/ProductShow";

const DisplayProductWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 90%;

  margin: 20px 20px;
`;
const DisplayDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;
const DisplayProductPrice = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.extra};
  font-weight: 100;
`;
const DisplayProductName = styled.p`
  font-weight: bold;
`;
const DisplayProductDescription = styled.p`
  font-weight: 100;
`;

const DisplayProduct = ({
  productId,
  productPrice,
  productName,
  productDescription,
  productCategory,
  productImage,
}) => {
  const context = useContext(RootContext);
  const { handleAddProductToCart, handleDuplicatesInCart } = context;

  return (
    <DisplayProductWrapper>
      <ProductShow type={productCategory} img={productImage} />
      <DisplayDetailsWrapper>
        <DisplayProductPrice>{productPrice} PLN</DisplayProductPrice>
        <DisplayProductName>{productName}</DisplayProductName>
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
        <DisplayProductDescription>
          {productDescription}
        </DisplayProductDescription>
      </DisplayDetailsWrapper>
    </DisplayProductWrapper>
  );
};

export default DisplayProduct;
