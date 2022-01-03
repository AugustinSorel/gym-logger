import GlobalStyle from "./styles";
import { ThemeProvider } from "styled-components";
import theme from "./utils/theme";
import { Header } from "./components/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Header />
    </ThemeProvider>
  );
}

export default App;
