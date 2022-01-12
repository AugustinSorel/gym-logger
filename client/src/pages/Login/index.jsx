import fadeTransition from "../../framer-motion/transition";
import * as LoginStyle from "../../styles/Login.styled";
import { PillButton } from "../../components/PillButton";
import {
  whileHoverScale,
  whileTapScale,
} from "../../framer-motion/whileVariants";
import { useState } from "react";
import invalidInputVariants from "../../framer-motion/invalidInputVariants";
import { useAnimation } from "framer-motion";
import useUser from "../../store/useUser";

const defaultUserInputs = {
  email: "",
  password: "",
};

export const Login = () => {
  const [userInputs, setUserInputs] = useState(defaultUserInputs);

  const setUserToken = useUser((state) => state.setUserToken);

  const emailAnimation = useAnimation();
  const passwordAnimation = useAnimation();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(userInputs);
    e.currentTarget.elements[2].blur();
    setUserToken(true);
  };

  const handleChange = (e) => {
    setUserInputs({ ...userInputs, [e.target.name]: e.target.value });
  };

  return (
    <LoginStyle.Form
      initial={fadeTransition.initial}
      animate={fadeTransition.animate}
      exit={fadeTransition.exit}
      onSubmit={handleFormSubmit}
    >
      <LoginStyle.Title>Login</LoginStyle.Title>

      <LoginStyle.InputsContainer>
        <LoginStyle.Input
          name="email"
          type="text"
          placeholder="test@google.com"
          variants={invalidInputVariants}
          animate={emailAnimation}
          whileHover={whileHoverScale}
          whileTap={whileTapScale}
          whileFocus={whileHoverScale}
          autoComplete="no"
          onChange={handleChange}
        />

        <LoginStyle.Input
          name="password"
          placeholder="password"
          type="password"
          variants={invalidInputVariants}
          animate={passwordAnimation}
          whileHover={whileHoverScale}
          whileTap={whileTapScale}
          whileFocus={whileHoverScale}
          autoComplete="no"
          onChange={handleChange}
        />
        <PillButton text={"Login"} />
      </LoginStyle.InputsContainer>

      <LoginStyle.BottomText>
        Dont have an account yet?{"   "}
        <LoginStyle.LinkStyle to="/sign-up">Sign up</LoginStyle.LinkStyle>
      </LoginStyle.BottomText>
    </LoginStyle.Form>
  );
};
