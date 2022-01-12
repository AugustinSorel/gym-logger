import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, ::after, ::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --primary: ${({ theme }) => theme.colors.primary};
        --text-color: ${({ theme }) => theme.colors.textColor};
        --hover-color: ${({ theme }) => theme.colors.hoverColor};
        
        --font-size-large: ${({ theme }) => theme.fontSizes.large};
        --font-size-medium: ${({ theme }) => theme.fontSizes.medium};
        --font-size-small: ${({ theme }) => theme.fontSizes.small};
        
        --border-height: ${({ theme }) => theme.sizes.borderHeight};
        
        
        @media (max-width: 768px) {
            --font-size-large: ${({ theme }) => theme.fontSizes.medium};
            --font-size-medium: ${({ theme }) => theme.fontSizes.small};
        }
    }

    body{
        background-color: var(--primary);
        color: var(--text-color);
        font-family: 'Nunito', sans-serif;
        -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
    } 

    html, body { height: 100%; }

    #root{
        display: flex;
        flex-direction: column;
        height: 100%;
        
        overflow: hidden;
    }
    
    ::selection{
        background-color: var(--text-color);
        color: var(--primary);
    }

    ::-ms-reveal {
        filter: invert(100%);
    }
`;

export default GlobalStyle;
