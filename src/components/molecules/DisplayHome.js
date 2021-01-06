import React from "react";
import styled from "styled-components";
import Button from "../atoms/Button";

const DisplayHomeWrapper = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
const DisplayTitle = styled.h1``;
const DisplayHomeDescription = styled.p``;
const DisplayButtonsWrapper = styled.div``;

const DisplayHome = () => {
  return (
    <DisplayHomeWrapper>
      <DisplayTitle>Digital & analog cameras store</DisplayTitle>
      <DisplayHomeDescription>
        Find perfect products for you in our store.
        <br />
        Just click the button below!
      </DisplayHomeDescription>
      <DisplayButtonsWrapper>
        <Button type={"cameras"}>Cameras</Button>
        <Button type={"lenses"}>Lenses</Button>
        <Button type={"speedlights"}>Speedlights</Button>
        <Button type={""}>All</Button>
      </DisplayButtonsWrapper>
    </DisplayHomeWrapper>
  );
};

export default DisplayHome;
