import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Button, ButtonGroup } from "@material-ui/core";
import { ControlPoint, HighlightOff } from "@material-ui/icons";
import ProductShow from "../atoms/ProductShow";
import styled from "styled-components";

import img from ".././../assets/images/canon18-135.jpg";

const ProductWrapper = styled.div`
  width: 100%;
  height: 100%;
  /* display: flex;
  justify-content: space-around;
  align-items: center; */
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  gap: 20px;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.2);
`;

const ProductDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 100%;
`;
const ProductDescriptionPrice = styled.p``;
const ProductDescriptionName = styled.p``;

const ProductQuantity = styled.p`
  font-weight: 800;
`;

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
        <ProductShow img={img} inCart />
        <ProductDescriptionWrapper>
          <ProductDescriptionPrice>125PLN</ProductDescriptionPrice>
          <ProductDescriptionName>Sony a500</ProductDescriptionName>
        </ProductDescriptionWrapper>
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

        <ProductQuantity>2</ProductQuantity>

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

        <ProductQuantity>1</ProductQuantity>

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
