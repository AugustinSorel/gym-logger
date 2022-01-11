import { Header } from "../../components/Header";
import fadeTransition from "../../framer-motion/transition";
import * as LoginStyle from "../../styles/Login.styled";
import { PillButton } from "../../components/PillButton";
import {
  whileHoverScale,
  whileTapScale,
} from "../../framer-motion/whileVariants";

export const Login = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    e.currentTarget.elements[2].blur();
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
          name="emailInput"
          type="text"
          placeholder="test@google.com"
          // variants={invalidInputVariants}
          // animate={numberOfRepetitionsAnimation}
          whileHover={whileHoverScale}
          whileTap={whileTapScale}
          whileFocus={whileHoverScale}
          autoComplete="no"
          // onChange={handleChange}
        />

        <LoginStyle.Input
          name="passwordInput"
          placeholder="password"
          type="password"
          // variants={invalidInputVariants}
          // animate={numberOfRepetitionsAnimation}
          whileHover={whileHoverScale}
          whileTap={whileTapScale}
          whileFocus={whileHoverScale}
          autoComplete="no"
          // onChange={handleChange}
        />
        <PillButton text={"Login"} />
        <LoginStyle.BottomText>
          Dont have an account yet?{"   "}
          <LoginStyle.LinkStyle to={"/sign-up"}>Sign up</LoginStyle.LinkStyle>
        </LoginStyle.BottomText>
      </LoginStyle.Form>
    </LoginStyle.Container>
  );
};
