import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing:border-box;
    }

    body{
        font-family: ${({ theme }) => theme.fontFamily.main};
    }

    button
    {
        cursor: pointer
 }
`;

export default GlobalStyle;
