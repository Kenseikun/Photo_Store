import React, { useContext } from "react";
import styled from "styled-components";
import {
  Checkbox,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import RootContext from "../../context";
import { Category } from "@material-ui/icons";

const DIVForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
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
    check,
    handleProductPriceFilterChange,
    filterCategory,
    filterByCategory,
    initialProducts,
    handleFilterCategorySelectChange,
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
        <label htmlFor="filterByPrice">Free delivery</label>

        <Checkbox
          type="checkbox"
          name="filterByPrice"
          id="filterByPrice"
          color="primary"
          checked={check}
          onChange={handleProductPriceFilterChange}
        ></Checkbox>
        <FormControl className={classes.formControl}>
          {/* <InputLabel id="filterByCategory">Filter by Category</InputLabel> */}
          <Select
            id="filterByCategory"
            name="filterByCategory"
            value={filterCategory}
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
