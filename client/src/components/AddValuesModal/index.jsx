import {
  backdropVariants,
  dropInVariants,
} from "../../framer-motion/backDropVariants";
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
import { useMutation } from "react-query";
import { addValue } from "../../api/userApi";

const defaultUserInputs = {
  numberOfRepetitions: "",
  weight: "",
};

export const AddValuesModal = () => {
  const closeModal = useModal((state) => state.closeModal);
  const exercise = useExercise((state) => state.exercise);

  const numberOfRepetitionsAnimation = useAnimation();
  const weightAnimation = useAnimation();

  const [userInputs, setUserInputs] = useState(defaultUserInputs);

  const { mutate } = useMutation(addValue, {
    onSuccess: (data) => {
      // closeModal();
      // setUserInputs(defaultUserInputs);
      console.log(data);
    },

    onError: (error) => {
      console.log(error);
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
    console.log(userInputs);
    mutate({ userId: 12, exerciseId: exercise, value: userInputs });
    e.currentTarget.blur();
  };

  return (
    <AddValuesModalStyle.BackDrop
      onClick={() => closeModal()}
      variants={backdropVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
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

        <AddValuesModalStyle.Button
          whileHover={{ backgroundColor: "#fff", scale: 1.1 }}
          whileTap={{ scale: 0.9, backgroundColor: "#fff" }}
          whileFocus={{ backgroundColor: "#fff", scale: 1.1 }}
          onClick={handleClick}
        >
          Save
        </AddValuesModalStyle.Button>
      </AddValuesModalStyle.Form>
    </AddValuesModalStyle.BackDrop>
  );
};
