import GlobalStyle from "./styles";
import { ThemeProvider } from "styled-components";
import theme from "./utils/theme";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Header } from "./components/Header";
import { useEffect } from "react";
import useUser from "./store/useUser";
import loadCookie from "./utils/loadCookie";
import verifyToken from "./utils/verifyToken";
import { getUserById } from "./api/userApi";
import Dashboard from "./pages/Dashboard";

function App() {
  const location = useLocation();

  const userToken = useUser((state) => state.userToken);
  const setUser = useUser((state) => state.setUser);

  useEffect(() => {
    if (userToken) {
      const token = loadCookie("jwt");
      const { id } = verifyToken(token);
      getUserById(id).then((user) => setUser(user));
    }
  }, [userToken, setUser]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />

      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
        </Routes>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
