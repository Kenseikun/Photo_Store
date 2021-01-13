import React, { useContext } from "react";
import RootContext from "../context";
import ProductsList from "../components/ProductsList";
import styled from "styled-components";
import Category from "../components/atoms/Category";

import FilteringProducts from "../components/molecules/FilteringProducts";

const DIVproductsWrapper = styled.div`
  display: flex;
`;

const Products = () => {
  const context = useContext(RootContext);
  const { category } = context;
  return (
    <>
      <FilteringProducts />
      <DIVproductsWrapper>
        <ProductsList />
        <Category>{category}</Category>
      </DIVproductsWrapper>
    </>
  );
};

export default Products;
