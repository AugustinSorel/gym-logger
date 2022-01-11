import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import fadeTransition from "../../framer-motion/transition";
import useUser from "../../store/useUser";
import * as LoginStyle from "../../styles/Login.styled";

export const Login = () => {
  const setUser = useUser((state) => state.setUser);
  const navigate = useNavigate();
  return (
    <LoginStyle.Container
      initial={fadeTransition.initial}
      animate={fadeTransition.animate}
      exit={fadeTransition.exit}
    >
      <Header text={"Login"} />
      <h1>this is the login page</h1>
      <button
        onClick={() => {
          setUser(true);
          navigate("/");
        }}
      >
        test
      </button>
    </LoginStyle.Container>
  );
};
