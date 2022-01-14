import { dropInVariants } from "../../framer-motion/backDropVariants";
import {
  whileHoverScale,
  whileTapScale,
} from "../../framer-motion/whileVariants";
import useExercise from "../../store/useExercise";
import useModal from "../../store/useModal";
import * as AddValuesModalStyle from "../../styles/AddValuesModal.styled";
import { useAnimation } from "framer-motion";
import invalidInputVariants from "../../framer-motion/invalidInputVariants";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { addValue } from "../../api/dataApi";
import { PillButton } from "../PillButton";
import { BackDrop } from "../BackDrop";
import useUser from "../../store/useUser";

const defaultUserInputs = {
  numberOfRepetitions: "",
  weight: "",
};

export const AddValuesModal = () => {
  const closeAddValuesModal = useModal((state) => state.closeAddValuesModal);
  const user = useUser((state) => state.user);
  const exercise = useExercise((state) => state.exercise);

  const queryClient = useQueryClient();

  const numberOfRepetitionsAnimation = useAnimation();
  const weightAnimation = useAnimation();

  const [userInputs, setUserInputs] = useState(defaultUserInputs);

  const { mutate: addValueMutate } = useMutation(addValue, {
    onSuccess: (data) => {
      closeAddValuesModal();
      queryClient.invalidateQueries(["exerciseData", exercise]);
      console.log("data", data);
      setUserInputs(defaultUserInputs);
    },

    onError: (error) => {
      console.log(error);
      if (error.response.data.errorField === "numberOfRepetitions") {
        numberOfRepetitionsAnimation.start("animate");
      }

      if (error.response.data.errorField === "weight") {
        weightAnimation.start("animate");
      }
    },
  });

  const handleChange = (e) => {
    setUserInputs({
      ...userInputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    addValueMutate({
      userId: user._id,
      exerciseId: exercise,
      value: userInputs,
    });
    e.currentTarget.blur();
  };

  return (
    <BackDrop closeModal={closeAddValuesModal}>
      <AddValuesModalStyle.Form
        variants={dropInVariants}
        onClick={(e) => e.stopPropagation()}
      >
        <AddValuesModalStyle.Title>{exercise}</AddValuesModalStyle.Title>

        <AddValuesModalStyle.InputsContainer>
          <AddValuesModalStyle.InputDetailsContainer>
            <AddValuesModalStyle.InputTitle>
              Number of repetitions:
            </AddValuesModalStyle.InputTitle>
            <AddValuesModalStyle.Input
              placeholder="10"
              variants={invalidInputVariants}
              animate={numberOfRepetitionsAnimation}
              whileHover={whileHoverScale}
              whileTap={whileTapScale}
              whileFocus={whileHoverScale}
              type="number"
              name="numberOfRepetitions"
              onChange={handleChange}
            />
          </AddValuesModalStyle.InputDetailsContainer>

          <AddValuesModalStyle.InputDetailsContainer>
            <AddValuesModalStyle.InputTitle>
              Weight:
            </AddValuesModalStyle.InputTitle>
            <AddValuesModalStyle.Input
              placeholder="50"
              variants={invalidInputVariants}
              animate={weightAnimation}
              whileHover={whileHoverScale}
              whileTap={whileTapScale}
              whileFocus={whileHoverScale}
              type="number"
              name="weight"
              onChange={handleChange}
            />
          </AddValuesModalStyle.InputDetailsContainer>
        </AddValuesModalStyle.InputsContainer>

        <PillButton text="Save" onClick={handleClick} />
      </AddValuesModalStyle.Form>
    </BackDrop>
  );
};
