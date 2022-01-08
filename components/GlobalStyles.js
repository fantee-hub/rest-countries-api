import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    body{
        margin:0;
        padding:0;
        box-sizing:border-box;
        background: hsl(207, 26%, 17%);
        font-family: 'Nunito Sans', sans-serif;
        
    }
    h1,h2,h3,h4,h5,h6{
        margin:0;
        
    }
    img{
        width:100%;
        display:block;
    }
`;
export default GlobalStyles;
