import React from "react";
import styled, { css } from "styled-components";
import { productTypes } from "../../utils/productTypes";

const DIVcategoryWrapper = styled.div``;
const DIVcategorySign = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  margin: 10px auto;
  width: 150px;
  height: 60px;
  font-family: ${({ theme }) => theme.fontFamily.main};
  font-weight: 300;
  font-size: 1.3em;
  background-color: ${({ type, theme }) =>
    productTypes.cameras === type
      ? theme.colors.red
      : productTypes.lenses === type
      ? theme.colors.yellow
      : productTypes.speedlights === type
      ? theme.colors.blue
      : theme.colors.violet};

  ${({ inContact }) =>
    inContact &&
    css`
      position: absolute;
      top: 10px;
      right: 0;
      background-color: ${({ theme }) => theme.colors.blue};
    `}

  ${({ inAbout }) =>
    inAbout &&
    css`
      position: absolute;
      top: 10px;
      right: 0;
      background-color: ${({ theme }) => theme.colors.red};
    `}
`;

const Category = ({ children, inContact, inAbout }) => {
  return (
    <DIVcategoryWrapper>
      <DIVcategorySign inContact={inContact} inAbout={inAbout} type={children}>
        {children}
      </DIVcategorySign>
    </DIVcategoryWrapper>
  );
};

export default Category;
