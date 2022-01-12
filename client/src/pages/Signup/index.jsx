import fadeTransition from "../../framer-motion/transition";
import * as SignupStyled from "../../styles/SingUp.styled";
import { useState } from "react";
import invalidInputVariants from "../../framer-motion/invalidInputVariants";
import {
  whileHoverScale,
  whileTapScale,
} from "../../framer-motion/whileVariants";
import { useAnimation } from "framer-motion";
import { PillButton } from "../../components/PillButton";
import { useMutation } from "react-query";
import { userSignUp } from "../../api/userApi";
import { useNavigate } from "react-router-dom";
import useUser from "../../store/useUser";

const defaultUserInputs = {
  name: "",
  email: "",
  password: "",
};

export const Signup = () => {
  const [userInputs, setUserInputs] = useState(defaultUserInputs);
  const [errorMessage, setErrorMessage] = useState("");

  const nameAnimation = useAnimation();
  const emailAnimation = useAnimation();
  const passwordAnimation = useAnimation();

  const navigate = useNavigate();
  const setUserToken = useUser((state) => state.setUserToken);

  const {
    mutate: signUpMutate,
    isLoading,
    isError,
  } = useMutation(userSignUp, {
    onSuccess: (userToken) => {
      setUserToken(userToken);
      navigate("/");
    },

    onError: (error) => {
      console.log(error.response.data);
      setErrorMessage(error.response.data.error);
      if (error.response.data.errorField === "name") {
        nameAnimation.start("animate");
      }

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
    signUpMutate(userInputs);
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
      return errorMessage || "Sign Up";
    }

    return "Sign Up";
  };

  return (
    <SignupStyled.Form
      initial={fadeTransition.initial}
      animate={fadeTransition.animate}
      exit={fadeTransition.exit}
      onSubmit={handleFormSubmit}
    >
      <SignupStyled.Title>Sign Up</SignupStyled.Title>

      <SignupStyled.InputsContainer>
        <SignupStyled.Input
          name="name"
          placeholder="name"
          type="text"
          variants={invalidInputVariants}
          animate={nameAnimation}
          whileHover={whileHoverScale}
          whileTap={whileTapScale}
          whileFocus={whileHoverScale}
          autoComplete="no"
          onChange={handleChange}
        />

        <SignupStyled.Input
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

        <SignupStyled.Input
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
      </SignupStyled.InputsContainer>

      <SignupStyled.BottomText>
        All ready have an account?{"   "}
        <SignupStyled.LinkStyle to={"/login"}>Login</SignupStyled.LinkStyle>
      </SignupStyled.BottomText>
    </SignupStyled.Form>
  );
};
