import React, { useContext } from "react";
import RootContext from "../context";
import ProductsList from "../components/ProductsList";
import styled from "styled-components";
import Category from "../components/atoms/Category";

import FilteringProducts from "../components/molecules/FilteringProducts";

const DIVproductsWrapper = styled.div`
  display: flex;
`;

const DIVFilteringProductsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Products = () => {
  const context = useContext(RootContext);
  const { category } = context;
  return (
    <>
      <DIVFilteringProductsWrapper>
        <FilteringProducts />
      </DIVFilteringProductsWrapper>
      <DIVproductsWrapper>
        <ProductsList />
        <Category>{category}</Category>
      </DIVproductsWrapper>
    </>
  );
};

export default Products;
