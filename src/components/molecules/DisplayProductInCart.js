import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Button, ButtonGroup } from "@material-ui/core";
import { ControlPoint, HighlightOff } from "@material-ui/icons";
import ProductShow from "../atoms/ProductShow";
import styled from "styled-components";

import img from ".././../assets/images/canon18-135.jpg";

const ProductWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.2);
`;

const ProductDescription = styled.p``;

const ProductPrice = styled.p`
  font-weight: 800;
`;

const useStyles = makeStyles((theme) => ({
  button: {
    height: "20px",
    fontSize: "0.6em",
    padding: "8px",
  },
}));

const DisplayProductInCart = () => {
  const classes = useStyles();
  return (
    <>
      <ProductWrapper>
        <ProductShow img={img} />
        <ProductDescription>25PLN Sony a500</ProductDescription>
        <ButtonGroup>
          <Button
            className={classes.button}
            size="small"
            variant="contained"
            color="primary"
            startIcon={<ControlPoint />}
          >
            add more
          </Button>
          <Button
            className={classes.button}
            size="small"
            variant="contained"
            color="secondary"
            startIcon={<HighlightOff />}
          >
            Remove
          </Button>
        </ButtonGroup>

        <ProductPrice>00000 PLN</ProductPrice>
      </ProductWrapper>

      <ProductWrapper>
        <ProductShow img={img} />

        <ButtonGroup>
          <Button
            className={classes.button}
            size="small"
            variant="contained"
            color="primary"
            startIcon={<ControlPoint />}
          >
            add more
          </Button>
          <Button
            className={classes.button}
            size="small"
            variant="contained"
            color="secondary"
            startIcon={<HighlightOff />}
          >
            Remove
          </Button>
        </ButtonGroup>

        <ProductPrice>123 PLN</ProductPrice>
      </ProductWrapper>

      <ProductWrapper>
        <ProductShow img={img} />

        <ButtonGroup>
          <Button
            className={classes.button}
            size="small"
            variant="contained"
            color="primary"
            startIcon={<ControlPoint />}
          >
            add more
          </Button>
          <Button
            className={classes.button}
            size="small"
            variant="contained"
            color="secondary"
            startIcon={<HighlightOff />}
          >
            Remove
          </Button>
        </ButtonGroup>

        <ProductPrice>123 PLN</ProductPrice>
      </ProductWrapper>

      <ProductWrapper>
        <ProductShow img={img} />

        <ButtonGroup>
          <Button
            className={classes.button}
            size="small"
            variant="contained"
            color="primary"
            startIcon={<ControlPoint />}
          >
            add more
          </Button>
          <Button
            className={classes.button}
            size="small"
            variant="contained"
            color="secondary"
            startIcon={<HighlightOff />}
          >
            Remove
          </Button>
        </ButtonGroup>

        <ProductPrice>123 PLN</ProductPrice>
      </ProductWrapper>

      <ProductWrapper>
        <ProductShow img={img} />

        <ButtonGroup>
          <Button
            className={classes.button}
            size="small"
            variant="contained"
            color="primary"
            startIcon={<ControlPoint />}
          >
            add more
          </Button>
          <Button
            className={classes.button}
            size="small"
            variant="contained"
            color="secondary"
            startIcon={<HighlightOff />}
          >
            Remove
          </Button>
        </ButtonGroup>

        <ProductPrice>123 PLN</ProductPrice>
      </ProductWrapper>
    </>
  );
};

export default DisplayProductInCart;
