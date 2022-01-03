import GlobalStyle from "./styles";
import { ThemeProvider } from "styled-components";
import theme from "./utils/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <h1>Hello world</h1>
    </ThemeProvider>
  );
}

export default App;
