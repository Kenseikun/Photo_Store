import React from "react";
import styled from "styled-components";
import Button from "../atoms/Button";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
import { productTypes } from "../../utils/productTypes";

const DisplayHomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;
const DisplayTitle = styled.h1`
  font-size: 4.5em;
  font-family: ${({ theme }) => theme.fontFamily.main};
  font-weight: 800;
  letter-spacing: 2px;
`;
const DisplayHomeDescription = styled.p`
  font-size: 2em;
  font-weight: 100;
`;
const DisplayButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const DisplayHome = () => {
  return (
    <DisplayHomeWrapper>
      <DisplayTitle>
        Digital & analog <br /> cameras store
      </DisplayTitle>
      <DisplayHomeDescription>
        Find perfect products for you in our store.
        <br />
        Just click the button below!
      </DisplayHomeDescription>
      <DisplayButtonsWrapper>
        <Link
          to={{
            pathname: routes.products,
            state: {
              type: productTypes.cameras,
            },
          }}
        >
          <Button type={productTypes.cameras} inHome>
            {productTypes.cameras}
          </Button>
        </Link>

        <Link
          to={{
            pathname: routes.products,
            state: {
              type: productTypes.lenses,
            },
          }}
        >
          <Button type={productTypes.lenses} inHome>
            {productTypes.lenses}
          </Button>
        </Link>

        <Link
          to={{
            pathname: routes.products,
            state: {
              type: productTypes.speedlights,
            },
          }}
        >
          <Button type={productTypes.speedlights} inHome>
            {productTypes.speedlights}
          </Button>
        </Link>

        <Link
          to={{
            pathname: routes.products,
            state: {
              type: productTypes.all,
            },
          }}
        >
          <Button type="" inHome>
            {productTypes.all}
          </Button>
        </Link>
      </DisplayButtonsWrapper>
    </DisplayHomeWrapper>
  );
};

export default DisplayHome;
