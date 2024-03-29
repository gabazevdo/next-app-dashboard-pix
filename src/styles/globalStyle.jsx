import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`


:root {
  font-size: 62.5%;

  svg {
    font-size: 2.4rem;
  }
}
    
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

html,
body {
  @import url("./fonts.css");
  font-family: Rubik, sans-serif;
  text-decoration: none;
  background: #f9f9f9;
  scroll-behavior: smooth;
 }

 
 h1, h2, h3, h4, h5, h6 {
  color: ${({ theme }) => theme.colors.secondary.main};
  font-weight: 600;
}
`

export default GlobalStyle
