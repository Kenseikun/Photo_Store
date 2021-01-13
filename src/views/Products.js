import React, { useContext } from "react";
import RootContext from "../context";
import ProductsList from "../components/ProductsList";
import styled from "styled-components";
import Category from "../components/atoms/Category";
import { Checkbox, InputLabel, MenuItem, Select } from "@material-ui/core";

const DIVproductsWrapper = styled.div`
  display: flex;
  border: 1px solid red;
`;

const Products = () => {
  const context = useContext(RootContext);
  const {
    category,
    filteredByPrice,
    filterByCategory,
    filterCategory,
    check,
  } = context;
  return (
    <>
      <div>
        <form action="submit">
          <label htmlFor="filterByPrice">filter by price </label>

          <Checkbox
            type="checkbox"
            name="filterByPrice"
            id="filterByPrice"
            color="secondary"
            value={check}
            onChange={(e) => filteredByPrice(e)}
          ></Checkbox>

          <InputLabel htmlFor="select">Filter by Category</InputLabel>
          <Select
            id="select"
            name="filterByCategory"
            value={filterCategory}
            onChange={(e) => filterByCategory(e)}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="cameras">Cameras</MenuItem>
            <MenuItem value="lenses">Lenses</MenuItem>
            <MenuItem value="speedlights">Speedlights</MenuItem>
          </Select>
        </form>
      </div>
      <DIVproductsWrapper>
        <ProductsList />
        <Category>{category}</Category>
      </DIVproductsWrapper>
    </>
  );
};

export default Products;
