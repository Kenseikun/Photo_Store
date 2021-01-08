import React from "react";
import styled from "styled-components";
import Button from "../atoms/Button";
import { Link } from "react-router-dom";
import { routes } from "../../routes";

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
        <Link to={routes.products}>
          <Button type={"cameras"} inHome>
            Cameras
          </Button>
        </Link>

        <Link to={routes.products}>
          <Button type={"lenses"} inHome>
            Lenses
          </Button>
        </Link>

        <Link to={routes.products}>
          <Button type={"speedlights"} inHome>
            Speedlights
          </Button>
        </Link>

        <Link to={routes.products}>
          <Button type={""} inHome>
            All
          </Button>
        </Link>
      </DisplayButtonsWrapper>
    </DisplayHomeWrapper>
  );
};

export default DisplayHome;
