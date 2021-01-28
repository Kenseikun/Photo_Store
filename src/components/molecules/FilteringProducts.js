import React, { useContext } from "react";
import styled from "styled-components";
import { Checkbox, MenuItem, Select, FormControl } from "@material-ui/core";
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
  width: 100px;
  margin: 3.3px 0;
  background-color: transparent;
  -webkit-appearance: none;

  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    background: #b271a9;
    border: 0.2px solid #010101;
    border-radius: 1.3px;
    width: 100%;
    height: 8.4px;
    cursor: pointer;
  }
  &::-webkit-slider-thumb {
    margin-top: -3.5px;
    width: 15px;
    height: 15px;
    background: #ffffff;
    border: 1px solid #8d6300;
    border-radius: 50px;
    cursor: pointer;
    -webkit-appearance: none;
  }
  &:focus::-webkit-slider-runnable-track {
    background: #e6d1e3;
  }
  &::-moz-range-track {
    background: #b271a9;
    border: 0.2px solid #010101;
    border-radius: 1.3px;
    width: 100%;
    height: 8.4px;
    cursor: pointer;
  }
  &::-moz-range-thumb {
    width: 15px;
    height: 15px;
    background: #ffffff;
    border: 1px solid #8d6300;
    border-radius: 50px;
    cursor: pointer;
  }
  &::-ms-track {
    background: transparent;
    border-color: transparent;
    border-width: 4.3px 0;
    color: transparent;
    width: 100%;
    height: 8.4px;
    cursor: pointer;
  }
  &::-ms-fill-lower {
    background: #5d3257;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
  }
  &::-ms-fill-upper {
    background: #b271a9;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
  }
  &::-ms-thumb {
    width: 15px;
    height: 15px;
    background: #ffffff;
    border: 1px solid #8d6300;
    border-radius: 50px;
    cursor: pointer;
    margin-top: 0px;
    /*Needed to keep the Edge thumb centred*/
  }
  &:focus::-ms-fill-lower {
    background: #b271a9;
  }
  &:focus::-ms-fill-upper {
    background: #e6d1e3;
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
