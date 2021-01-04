import React from "react";
import styled, { css } from "styled-components";
// import Button from "./Button";

const StyledProductDescriptionWrapper = styled.div``;
const StyledProductPrice = styled.p``;
const StyledProductName = styled.p``;
const StyledProductDescription = styled.p``;

const ProductShowDescription = () => {
  return (
    <StyledProductDescriptionWrapper>
      <StyledProductPrice>PROPS Z CENY</StyledProductPrice>
      <StyledProductName>PROPS Z NAZWY</StyledProductName>
      {/* <Button>add to basket</Button> */}
      <StyledProductDescription>PROPS Z DESCRIPTION</StyledProductDescription>
    </StyledProductDescriptionWrapper>
  );
};

export default ProductShowDescription;
