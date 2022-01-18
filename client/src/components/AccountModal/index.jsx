import useModal from "../../store/useModal";
import { BackDrop } from "../BackDrop";
import * as AccountModalStyle from "../../styles/AccountModal.styled";
import { dropInVariants } from "../../framer-motion/backDropVariants";
import { PillButton } from "../PillButton";
import {
  whileHoverScale,
  whileTapScale,
} from "../../framer-motion/whileVariants";
import useUser from "../../store/useUser";
import { useEffect, useState } from "react";
import { useAnimation } from "framer-motion";
import invalidInputVariants from "../../framer-motion/invalidInputVariants";
import { deleteUserById, updateUserById } from "../../api/userApi";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const AccountModal = () => {
  const closeAccountModal = useModal((state) => state.closeAccountModal);

  const nameAnimation = useAnimation();
  const emailAnimation = useAnimation();
  const passwordAnimation = useAnimation();

  const user = useUser((state) => state.user);
  const setUser = useUser((state) => state.setUser);

  const [userInputs, setUserInputs] = useState(user);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setUserInputs(user);
  }, [user]);

  const { mutate: deleteMutate } = useMutation(deleteUserById, {
    onSuccess: () => {
      handleLogout();
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const {
    mutate: updateMutate,
    isError,
    isLoading,
  } = useMutation(updateUserById, {
    onSuccess: (updatedUser) => {
      setUser(updatedUser);
      closeAccountModal();
    },

    onError: (error) => {
      setErrorMessage(error.response.data.error);
      if (error.response.data.errorField === "name") {
        nameAnimation.start("animate");
      }

      if (error.response.data.errorField === "email") {
        emailAnimation.start("animate");
      }
    },
  });

  const getText = () => {
    if (isLoading) {
      return "Loading...";
    }

    if (isError) {
      return errorMessage || "Save";
    }

    return "Save";
  };

  const handleClick = (e) => {
    e.preventDefault();
    updateMutate({ userId: user._id, userInputs });
  };

  const handleDelete = () => {
    deleteMutate(user._id);
  };

  const handleLogout = () => {
    Cookies.remove("jwt");
    navigate("/welcome");
    setUser(null);
  };

  const handleChange = (e) => {
    setUserInputs({
      ...userInputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <BackDrop closeModal={closeAccountModal}>
      <AccountModalStyle.Form
        variants={dropInVariants}
        onClick={(e) => e.stopPropagation()}
      >
        <AccountModalStyle.Title>{userInputs.name}</AccountModalStyle.Title>

        <AccountModalStyle.InputsContainer>
          <AccountModalStyle.InputDetailsContainer>
            <AccountModalStyle.InputTitle>Name:</AccountModalStyle.InputTitle>
            <AccountModalStyle.Input
              placeholder="name"
              variants={invalidInputVariants}
              animate={nameAnimation}
              whileHover={whileHoverScale}
              whileTap={whileTapScale}
              whileFocus={whileHoverScale}
              type="text"
              name="name"
              value={userInputs.name}
              onChange={handleChange}
              autoComplete="no"
            />
          </AccountModalStyle.InputDetailsContainer>

          <AccountModalStyle.InputDetailsContainer>
            <AccountModalStyle.InputTitle>Email:</AccountModalStyle.InputTitle>
            <AccountModalStyle.Input
              placeholder="test@google.com"
              variants={invalidInputVariants}
              animate={emailAnimation}
              whileHover={whileHoverScale}
              whileTap={whileTapScale}
              whileFocus={whileHoverScale}
              type="text"
              name="email"
              value={userInputs.email}
              onChange={handleChange}
              autoComplete="no"
            />
          </AccountModalStyle.InputDetailsContainer>

          <AccountModalStyle.InputDetailsContainer>
            <AccountModalStyle.InputTitle>
              Password:
            </AccountModalStyle.InputTitle>
            <AccountModalStyle.Input
              placeholder="password"
              variants={invalidInputVariants}
              animate={passwordAnimation}
              whileHover={whileHoverScale}
              whileTap={whileTapScale}
              whileFocus={whileHoverScale}
              type="text"
              name="password"
              value={userInputs.password}
              onChange={handleChange}
            />
          </AccountModalStyle.InputDetailsContainer>

          <AccountModalStyle.InputDetailsContainer>
            <AccountModalStyle.InputTitle>
              Delete Account:
            </AccountModalStyle.InputTitle>
            <AccountModalStyle.DeleteAccountText
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleDelete}
            >
              Delete
            </AccountModalStyle.DeleteAccountText>
          </AccountModalStyle.InputDetailsContainer>

          <AccountModalStyle.InputDetailsContainer>
            <AccountModalStyle.InputTitle>Logout:</AccountModalStyle.InputTitle>
            <AccountModalStyle.LogoutAccountText
              whileHover={whileHoverScale}
              whileTap={whileTapScale}
              onClick={handleLogout}
            >
              Logout
            </AccountModalStyle.LogoutAccountText>
          </AccountModalStyle.InputDetailsContainer>
        </AccountModalStyle.InputsContainer>

        <PillButton text={getText()} onClick={handleClick} />
      </AccountModalStyle.Form>
    </BackDrop>
  );
};
