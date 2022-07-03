import { createGlobalStyle } from "styled-components";

export const GlobalStyle= createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&display=swap');
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background-color: #111;
    color: #fff;
    font-family: 'Roboto', sans-serif;
  }
  .films--section{
    margin-top: -100px;
  }
`