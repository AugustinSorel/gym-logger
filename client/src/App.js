import GlobalStyle from "./styles";
import { ThemeProvider } from "styled-components";
import theme from "./utils/theme";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";

import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
