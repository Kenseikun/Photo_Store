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

  ${({ inContact }) =>
    inContact &&
    css`
   
  width: 250px;
  height: 250px;


  &::before {
       width: 100px;
    height: 100px;

    `}

  ${({ inAbout }) =>
    inAbout &&
    css`
      height: 300px;
      width: 300px;
      &::before {
        width: 120px;
        height: 120px;
      }
    `}
`;

const Logo = ({ inContact, inAbout }) => {
  return <StyledLogo inContact={inContact} inAbout={inAbout}></StyledLogo>;
};

export default Logo;
