import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing:border-box;
    }

    body{
        height: 100vh;
        font-family: ${({ theme }) => theme.fontFamily.main};
        /* background-color: ${({ theme }) => theme.gradientColors.blue} */
    }

    button
    {
        cursor: pointer
 }
`;

export default GlobalStyle;
