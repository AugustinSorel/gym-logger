import { Header } from "../../components/Header";
import fadeTransition from "../../framer-motion/transition";
import * as LoginStyle from "../../styles/Login.styled";

export const Login = () => {
  return (
    <LoginStyle.Container
      initial={fadeTransition.initial}
      animate={fadeTransition.animate}
      exit={fadeTransition.exit}
    >
      <Header text={"Login"} />
      <h1>this is the login page</h1>
    </LoginStyle.Container>
  );
};
