import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Button, ButtonBase, ButtonGroup } from "@material-ui/core";
import { Add, Delete, Remove } from "@material-ui/icons";
import ProductShow from "../atoms/ProductShow";
import styled from "styled-components";

import RootContext from "../../context";

const LIproduct = styled.li`
  list-style: none;
`;

const ProductWrapper = styled.div`
  width: 100%;
  height: 100%;
  /* display: flex;
  justify-content: space-around;
  align-items: center; */
  margin: 10px auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  gap: 40px;
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
const ProductPrice = styled.p`
  ${({ theme }) => theme.fontFamily.extra};
  font-weight: 500;
`;

const ProductName = styled.p`
  font-weight: 800;
`;

const ProductQuantity = styled.p`
  font-weight: 800;
`;

const useStyles = makeStyles((theme) => ({
  button: {
    height: "40px",
    fontSize: "0.6em",
    padding: "8px",
  },
}));

const DisplayProductInCart = () => {
  const classes = useStyles();
  const context = useContext(RootContext);
  const {
    cart,
    handleProductQuantityInCartAdd,
    handleProductQuantityInCartRemove,
    handleRemoveProductFromCartBtn,
    productsInCartQuantity,
  } = context;
  return (
    <>
      <ul>
        {cart.map((product) => {
          const {
            productId,
            productImage,
            productPrice,
            productName,
            productQuantity,
            productCategory,
          } = product;
          return (
            <LIproduct>
              <ProductWrapper>
                <ProductShow img={productImage} type={productCategory} inCart />
                <ProductDescriptionWrapper>
                  <ProductPrice>{productPrice} PLN</ProductPrice>
                  <ProductName>{productName}</ProductName>
                </ProductDescriptionWrapper>
                <ButtonGroup>
                  <Button
                    className={classes.button}
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={() => handleProductQuantityInCartAdd(productId)}
                  >
                    <Add />
                  </Button>
                  <Button
                    className={classes.button}
                    size="small"
                    variant="contained"
                    color="secondary"
                    onClick={() => handleProductQuantityInCartRemove(productId)}
                    disabled={productQuantity === 1 ? true : false}
                  >
                    <Remove />
                  </Button>
                </ButtonGroup>

                <ProductQuantity>{productQuantity}</ProductQuantity>

                <ButtonBase
                  onClick={() =>
                    handleRemoveProductFromCartBtn(productId, productQuantity)
                  }
                >
                  <Delete fontSize="large" />
                </ButtonBase>
              </ProductWrapper>
            </LIproduct>
          );
        })}
      </ul>
    </>
  );
};

export default DisplayProductInCart;
