import React from "react";
import { Checkbox, InputLabel, MenuItem, Select } from "@material-ui/core";
import RootContext from "../../context";

const FilteringProducts = () => {
  const context = RootContext;
  const { check, filteredByPrice, filterCategory, filterByCategory } = context;
  return (
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
  );
};

export default FilteringProducts;
