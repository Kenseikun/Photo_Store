import React from "react";
import styled from "styled-components";

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
  background-color: ${({ theme }) => theme.colors.violet};
`;

const Category = ({ children, category: all }) => {
  return (
    <DIVcategoryWrapper>
      <DIVcategorySign>{children}</DIVcategorySign>
    </DIVcategoryWrapper>
  );
};

export default Category;
