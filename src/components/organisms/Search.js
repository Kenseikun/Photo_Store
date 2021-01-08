import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { SearchOutlined } from "@material-ui/icons";

import { TextField } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles((theme) => ({
  root: { color: "green" },
  textField: { backgroundColor: "gray", borderRadius: "5px" },
  icon: { color: "black" },
}));

const Search = () => {
  const classes = useStyles();
  return (
    // <form className={classes.root} noValidate autoComplete="off">
    //   <TextField
    //     id="outlined-basic"
    //     label="search"
    //     className={classes.textField}
    //     variant="outlined"
    //     color="primary"
    //     InputProps={{
    //       startAdornment: (
    //         <InputAdornment position="start">
    //           <SearchOutlined className={classes.icon} />
    //         </InputAdornment>
    //       ),
    //     }}
    //   ></TextField>
    // </form>
    <form type="submit">
      <input
        type="text"
        placeholder="search for products"
        name="productSearchInput"
        value=""
      />
    </form>
  );
};

export default Search;
