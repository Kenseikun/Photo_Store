import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popper from "@material-ui/core/Popper";
import Fade from "@material-ui/core/Fade";
import RootContext from "../../context";
import DisplayProductInPopper from "../DisplayProductInPopper";

const useStyles = makeStyles((theme) => ({
  paper: {
    border: "1px solid",
    padding: theme.spacing(1),
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: "#46287c",
  },
}));

const ProductsDropDown = () => {
  const classes = useStyles();
  const context = useContext(RootContext);
  const { popperProducts, anchorEl, isPopperOpen } = context;

  return (
    <div>
      <Popper
        id="transitions-popper"
        open={isPopperOpen}
        anchorEl={anchorEl}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={500}>
            <div className={classes.paper}>
              {popperProducts.length !== 0 ? (
                <DisplayProductInPopper />
              ) : (
                <p>There is no item like this...</p>
              )}
            </div>
          </Fade>
        )}
      </Popper>
    </div>
  );
};

export default ProductsDropDown;
