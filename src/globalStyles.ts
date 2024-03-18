import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0px;
        margin: 0px;
        border: none;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    html {
        min-height: 100%;

        display: flex;
        flex-direction: column;
    }

    body {
        position: relative;
        flex-grow: 1;
    }

    /* Links */

    a, a:link, a:visited  {
        text-decoration: none;
    }

    a:hover  {
        text-decoration: none;
        color: inherit
    }

    /* Common */

    aside, nav, footer, header, section, main {
        display: block;
    }

    h1, h2, h3, h4, h5, h6, p {
        font-size: inherit;
        font-weight: inherit;
    }

    ul, ul li {
        list-style: none;
    }

    img {
        vertical-align: top;
    }

    img, svg {
        max-width: 100%;
        height: auto;
    }

    address {
    font-style: normal;
    }

    /* Form */

    input, textarea, button, select {
        font-family: inherit;
        font-size: inherit;
        color: inherit;
        background-color: transparent;
    }

    input::-ms-clear {
        display: none;
    }

    button, input[type="submit"] {
        display: inline-block;
        box-shadow: none;
        background-color: transparent;
        background: none;
        cursor: pointer;
    }

    input:focus, input:active,
    button:focus, button:active {
        outline: none;
    }

    button::-moz-focus-inner {
        padding: 0;
        border: 0;
    }

    label {
        cursor: pointer;
    }

    legend {
        display: block;
    }

    :root{
        font-family: 'Jost';
        font-weight: normal;
        font-size: 16px;
        color: #444B58;
        background-color: #fff;
  }

`;
 
export default GlobalStyle;