import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    body { 
        font-family: 'Questrial', sans-serif;
        letter-spacing: 0.2em;
        margin: 0;
        background: #E9E9E9;
        overflow-x: hidden;
    }
    .text-center {
        text-align: center;
    }
`
