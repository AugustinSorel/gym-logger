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
import { useMutation } from "react-query";
import { userLogin } from "../../api/userApi";
import { useNavigate } from "react-router-dom";

const defaultUserInputs = {
  email: "",
  password: "",
};

export const Login = () => {
  const [userInputs, setUserInputs] = useState(defaultUserInputs);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const emailAnimation = useAnimation();
  const passwordAnimation = useAnimation();

  const setUserToken = useUser((state) => state.setUserToken);
  const setUser = useUser((state) => state.setUser);

  const {
    mutate: loginMutate,
    isLoading,
    isError,
  } = useMutation(userLogin, {
    onSuccess: ({ token, user }) => {
      setUserToken(token);
      setUser(user);

      navigate("/");
      setUserInputs(defaultUserInputs);
    },
    onError: (error) => {
      console.log(error.response.data);
      setErrorMessage(error.response.data.error);

      if (error.response.data.errorField === "email") {
        emailAnimation.start("animate");
      }

      if (error.response.data.errorField === "password") {
        passwordAnimation.start("animate");
      }
    },
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    loginMutate(userInputs);
    e.currentTarget.elements[2].blur();
  };

  const handleChange = (e) => {
    setUserInputs({ ...userInputs, [e.target.name]: e.target.value });
  };

  const getText = () => {
    if (isLoading) {
      return "Loading...";
    }

    if (isError) {
      return errorMessage || "Login";
    }

    return "Login";
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
          autocapitalize="off"
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
        <PillButton text={getText()} />
      </LoginStyle.InputsContainer>

      <LoginStyle.BottomText>
        Dont have an account yet?{"   "}
        <LoginStyle.LinkStyle to="/sign-up">Sign up</LoginStyle.LinkStyle>
      </LoginStyle.BottomText>
    </LoginStyle.Form>
  );
};
