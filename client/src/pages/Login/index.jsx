import { pageTransition } from "../../framer-motion/transition";
import * as LoginStyle from "../../styles/Login.styled";

export const Login = () => {
  return (
    <LoginStyle.Container
      initial={pageTransition.transitionLeftToRight.initial}
      animate={pageTransition.transitionLeftToRight.animate}
      exit={pageTransition.transitionLeftToRight.exit}
    >
      <h1>this is the login page</h1>
    </LoginStyle.Container>
  );
};
