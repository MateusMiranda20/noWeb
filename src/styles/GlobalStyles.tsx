import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'DM Sans', sans-serif;
}

button{
  cursor: pointer;
}

body::-webkit-scrollbar{
    width: 6px;
  }

  body::-webkit-scrollbar-track{
    background-color:  #BFF747 ;

  }

  body::-webkit-scrollbar-thumb{
    background-color:  #000 ;
  }

`