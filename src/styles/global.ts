import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }
  h1 {
    font-size: 5.5rem;
    font-weight: 600;
    color: ${props => props.theme['white']};
  }
`