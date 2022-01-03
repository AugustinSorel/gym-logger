import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --primary: ${({ theme }) => theme.colors.primary};
        --text-color: ${({ theme }) => theme.colors.textColor};
    }

    body{
        background-color: var(--primary);
        color: var(--text-color);
        font-family: 'Nunito', sans-serif;
    }   
    
    ::selection{
        background-color: var(--text-color);
        color: var(--primary);
    }
`;

export default GlobalStyle;
