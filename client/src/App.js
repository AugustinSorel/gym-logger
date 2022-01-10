import GlobalStyle from "./styles";
import { ThemeProvider } from "styled-components";
import theme from "./utils/theme";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />

      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
        </Routes>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
