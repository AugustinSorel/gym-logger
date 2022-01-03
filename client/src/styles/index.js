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
        
        --font-size-large: ${({ theme }) => theme.fontSizes.large};
        --font-size-medium: ${({ theme }) => theme.fontSizes.medium};
        --font-size-small: ${({ theme }) => theme.fontSizes.small};

        --border-height: ${({ theme }) => theme.sizes.borderHeight};
    }

    body{
        background-color: var(--primary);
        color: var(--text-color);
        font-family: 'Nunito', sans-serif;
    }   

    #root{
        height: 100vh;
        display: flex;
        flex-direction: column;
    }
    
    ::selection{
        background-color: var(--text-color);
        color: var(--primary);
    }
`;

export default GlobalStyle;
