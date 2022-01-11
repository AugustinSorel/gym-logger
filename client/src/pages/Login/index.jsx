import { Header } from "../../components/Header";
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
import { useLocation } from "react-router-dom";

const defaultUserInputs = {
  email: "",
  password: "",
};

export const Login = () => {
  const [userInputs, setUserInputs] = useState(defaultUserInputs);

  const emailAnimation = useAnimation();
  const passwordAnimation = useAnimation();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(userInputs);
    e.currentTarget.elements[2].blur();
  };

  const handleChange = (e) => {
    setUserInputs({ ...userInputs, [e.target.name]: e.target.value });
  };

  return (
    <LoginStyle.Container
      initial={fadeTransition.initial}
      animate={fadeTransition.animate}
      exit={fadeTransition.exit}
    >
      <Header text={"Login"} />
      <LoginStyle.Form onSubmit={handleFormSubmit}>
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
        <LoginStyle.BottomText>
          Dont have an account yet?{"   "}
          <LoginStyle.LinkStyle
            to={{
              pathname: "/sign-up",
              state: { from: "/login" }, // or any property you like to add
            }}
          >
            Sign up
          </LoginStyle.LinkStyle>
        </LoginStyle.BottomText>
      </LoginStyle.Form>
    </LoginStyle.Container>
  );
};
