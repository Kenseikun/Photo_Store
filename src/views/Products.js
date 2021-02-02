import React, { useContext } from "react";
import RootContext from "../context";
import ProductsList from "../components/ProductsList";
import styled from "styled-components";
import Category from "../components/atoms/Category";

import FilteringProducts from "../components/molecules/FilteringProducts";
import { productTypes } from "../utils/productTypes";

const DIVproductsWrapper = styled.div`
  display: flex;
`;

const DIVFilteringProductsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Products = (props) => {
  const context = useContext(RootContext);
  const { products } = context;

  const { type } = props.location.state;
  let productsFilteredByType = [...products];
  switch (type) {
    case productTypes.cameras:
      productsFilteredByType = productsFilteredByType.filter(
        (product) => product.productCategory === productTypes.cameras
      );
      break;
    case productTypes.lenses:
      productsFilteredByType = productsFilteredByType.filter(
        (product) => product.productCategory === productTypes.lenses
      );
      break;
    case productTypes.speedlights:
      productsFilteredByType = productsFilteredByType.filter(
        (product) => product.productCategory === productTypes.speedlights
      );
      break;

    default:
      productsFilteredByType = [...products];
  }

  return (
    <>
      {type === "all" ? (
        <DIVFilteringProductsWrapper>
          <FilteringProducts />
        </DIVFilteringProductsWrapper>
      ) : null}
      <DIVproductsWrapper>
        <ProductsList products={productsFilteredByType} />
        <Category>{type}</Category>
      </DIVproductsWrapper>
    </>
  );
};

export default Products;
