import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    --background: #F0FFFF;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body { 
    font-family: Roboto, sans-serif;
    background: var(--background);
}

div#root {
    height: 100vh;
}

button {
    border: 0;
    border-radius: 8px;
    cursor: pointer;

    svg {
        width:24px;
        height:24px;
    }
}
`;
