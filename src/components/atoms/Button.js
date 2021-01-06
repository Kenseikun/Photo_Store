import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ type, theme }) =>
    type === "cameras"
      ? theme.colors.red
      : type === "lenses"
      ? theme.colors.yellow
      : type === "speedlights"
      ? theme.colors.blue
      : theme.colors.violet};
  padding: 5px;
  border: none;
  outline: none;
  color: white;

  ${({ cartBtn }) =>
    cartBtn &&
    css`
      padding: 8px 15px;
      background-image: url(${({ icon }) => icon});
      background-repeat: no-repeat;
      background-size: 70%;
      background-position: 50% 40%;
      background-color: crimson;
      border-radius: 50%;
      width: 40px;
      height: 40px;
    `}

  ${({ inHome }) =>
    inHome &&
    css`
      font-size: 1.5em;
      font-weight: 100;
      height: 80px;
      width: 250px;
      &:hover {
        opacity: 0.8;
      }
    `}
`;

const Button = ({ type, children, cartBtn, icon, onClickFn, inHome }) => {
  return (
    <StyledButton
      cartBtn={cartBtn}
      icon={icon}
      type={type}
      onClick={onClickFn}
      inHome={inHome}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
