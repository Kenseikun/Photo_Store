import React from "react";
import styled, { css } from "styled-components";

const StyledLogo = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.violet};
  }
`;

const Logo = ({}) => {
  return <StyledLogo></StyledLogo>;
};

export default Logo;
