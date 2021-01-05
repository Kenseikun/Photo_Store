import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ type, theme }) =>
    type === "cameras"
      ? theme.colors.red
      : type === "lenses"
      ? theme.colors.yellow
      : theme.colors.blue};
  padding: 5px;
  border: none;
  outline: none;
  color: white;
`;

const Button = ({ type, children }) => {
  return <StyledButton type={type}>{children}</StyledButton>;
};

export default Button;
