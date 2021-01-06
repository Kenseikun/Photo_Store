import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing:border-box;
    }

    body{
       color: white;  
       min-height: 100vh;  
       font-family: ${({ theme }) => theme.fontFamily.main};
       background: ${({ theme }) => theme.gradientColors.background};
       background-repeat: no-repeat;
    }

    button
    {
        cursor: pointer
 }
`;

export default GlobalStyle;
