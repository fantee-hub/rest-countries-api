import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "hsl(0, 0%, 98%)",
  fontColor: "hsl(200, 15%, 8%)",
  navColor: "hsl(0, 0%, 100%)",
  input: "hsl(0, 0%, 52%)",
  hover: "hsl(0, 0%, 90%)",
};
export const darkTheme = {
  body: "hsl(207, 26%, 17%)",
  fontColor: "hsl(0, 0%, 100%)",
  navColor: "hsl(209, 23%, 22%)",
  input: "hsl(0, 0%, 100%)",
  hover: "hsl(207, 26%, 17%)",
};

export const GlobalStyles = createGlobalStyle`

    body{
        margin:0;
        padding:0;
        box-sizing:border-box;
       
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
