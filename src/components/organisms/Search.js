import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import RootContext from "../../context";

const Input = styled.input`
  background-color: #040d21;
  outline: none;
  border: none;
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
`;

const Search = () => {
  const context = useContext(RootContext);
  const { showAndHidePopper, popperInputSearchValue } = context;
  return (
    <Input
      type="search"
      placeholder="Search....."
      results="5"
      name="productSearchInput"
      onChange={showAndHidePopper}
      value={popperInputSearchValue}
    />
  );
};

export default Search;
