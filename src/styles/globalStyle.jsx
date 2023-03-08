import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

html,
body {
  @import url("./fonts.css");
  font-size: 62.5%;
  font-family: Rubik, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
  text-decoration: none;
  scroll-behavior: smooth;
 }

 h1, h2, h3, h4, h5, h6 {
  color: ${({ theme }) => theme.colors.secondary.main};
  font-weight: 600;
}
`

export default GlobalStyle
