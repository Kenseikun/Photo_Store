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
`;

const Button = ({ type, children, cartBtn, icon, onClickFn }) => {
  return (
    <StyledButton cartBtn={cartBtn} icon={icon} type={type} onClick={onClickFn}>
      {children}
    </StyledButton>
  );
};

export default Button;
