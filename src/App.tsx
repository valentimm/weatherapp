import { ThemeProvider } from "styled-components";
import { Principal } from "./pages/principal/index";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
        <Principal />
        <GlobalStyle />
    </ThemeProvider>
  )
}