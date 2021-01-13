import React, { useContext } from "react";
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

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 160,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

  menuItem: {
    backgroundColor: "pink",
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
      <form action="submit">
        <label htmlFor="filterByPrice">filter by price </label>

        <Checkbox
          type="checkbox"
          name="filterByPrice"
          id="filterByPrice"
          color="secondary"
          checked={check}
          onChange={handleProductPriceFilterChange}
        ></Checkbox>
        <FormControl className={classes.formControl}>
          <InputLabel id="filterByCategory">Filter by Category</InputLabel>
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
      </form>
    </div>
  );
};

export default FilteringProducts;
