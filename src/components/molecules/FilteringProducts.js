import React, { useContext } from "react";
import styled from "styled-components";
import {
  Checkbox,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  FormControlLabel,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import RootContext from "../../context";

const DIVForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const Input = styled.input`
  background-color: #040d21;
  outline: none;
  border: none;
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
`;

const InputRange = styled.input`
  -webkit-appearance: none;
  width: 100%;
  background: #040d21;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;

    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.violet};
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }

  &:focus {
    outline: none;
    border: 1px solid black;
  }
`;

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 160,
    backgroundColor: "#46287c",
    borderRadius: "3px",
    padding: "2px 5px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

  menuItem: {
    backgroundColor: "#391f49",
    color: "#fff",
  },
}));

const FilteringProducts = () => {
  const context = useContext(RootContext);
  const {
    freeDeliveryCheckbox,
    handleProductPriceFilterChange,
    filterCategory,
    initialProducts,
    handleFilterCategorySelectChange,
    maxProductPrice,
    filteredPrice,
    handleRangePriceChange,
    productSearchValue,
    hangleProductSearchChange,
  } = context;

  const productsCategories = [
    "all",
    ...new Set(
      initialProducts.map((product) => {
        return product.productCategory;
      })
    ),
  ];

  console.log(productsCategories);
  const classes = useStyles();
  return (
    <div>
      <DIVForm action="submit">
        <Input
          type="search"
          placeholder="search product..."
          value={productSearchValue}
          onChange={hangleProductSearchChange}
        />
        <label htmlFor="priceInput">Price: {filteredPrice}PLN</label>
        <InputRange
          type="range"
          id="priceInput"
          min={0}
          max={maxProductPrice}
          value={filteredPrice}
          onChange={handleRangePriceChange}
        />
        <label htmlFor="filterByPrice">Free delivery</label>

        <Checkbox
          type="checkbox"
          name="filterByPrice"
          id="filterByPrice"
          color="secondary"
          checked={freeDeliveryCheckbox}
          onChange={handleProductPriceFilterChange}
        />
        <FormControl className={classes.formControl}>
          {/* <InputLabel id="filterByCategory">Filter by Category</InputLabel> */}
          <Select
            id="filterByCategory"
            name="filterByCategory"
            value={filterCategory}
            defaultValue={productsCategories[0]}
            onChange={handleFilterCategorySelectChange}
          >
            {productsCategories.map((category) => {
              return (
                <MenuItem value={category} className={classes.menuItem}>
                  {category}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </DIVForm>
    </div>
  );
};

export default FilteringProducts;
