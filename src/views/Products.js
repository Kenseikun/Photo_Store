import React from "react";
import ProductsList from "../components/ProductsList";
import styled from "styled-components";
import Category from "../components/atoms/Category";

const DIVproductsWrapper = styled.div`
  display: flex;
`;

const Products = () => {
  return (
    <DIVproductsWrapper>
      <ProductsList />
      <Category>All</Category>
    </DIVproductsWrapper>
  );
};

export default Products;
