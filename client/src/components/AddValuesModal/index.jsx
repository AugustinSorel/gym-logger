import {
  whileHoverScale,
  whileTapScale,
} from "../../framer-motion/whileVariants";
import useExercise from "../../store/useExercise";
import useModal from "../../store/useModal";
import * as AddValuesModalStyle from "../../styles/AddValuesModal.styled";

const variants = {
  initial: {
    opacity: 0,
    backdropFilter: "blur(0px)",
  },

  animate: {
    opacity: 1,
    backdropFilter: "blur(4px)",
  },

  exit: {
    opacity: 0,
    backdropFilter: "blur(0px)",
  },
};

const variants2 = {
  initial: {
    y: "-100vh",
  },

  animate: {
    y: 0,
  },

  exit: {
    y: "100vh",
  },
};

export const AddValuesModal = () => {
  const closeModal = useModal((state) => state.closeModal);
  const exercise = useExercise((state) => state.exercise);
  return (
    <AddValuesModalStyle.BackDrop
      onClick={() => closeModal()}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <AddValuesModalStyle.Form
        variants={variants2}
        onClick={(e) => e.stopPropagation()}
      >
        <AddValuesModalStyle.Title>{exercise}</AddValuesModalStyle.Title>

        <AddValuesModalStyle.InputsContainer>
          <AddValuesModalStyle.Input
            placeholder="Set 1"
            whileHover={whileHoverScale}
            whileTap={whileTapScale}
            whileFocus={whileHoverScale}
          />
          <AddValuesModalStyle.Input
            placeholder="Set 2"
            whileHover={whileHoverScale}
            whileTap={whileTapScale}
            whileFocus={whileHoverScale}
          />
          <AddValuesModalStyle.Input
            placeholder="Set 3"
            whileHover={whileHoverScale}
            whileTap={whileTapScale}
            whileFocus={whileHoverScale}
          />
        </AddValuesModalStyle.InputsContainer>

        <AddValuesModalStyle.Button
          whileHover={{ backgroundColor: "#fff", scale: 1.1 }}
          whileTap={{ scale: 0.9, backgroundColor: "#fff" }}
          whileFocus={{ backgroundColor: "#fff", scale: 1.1 }}
        >
          Save
        </AddValuesModalStyle.Button>
      </AddValuesModalStyle.Form>
    </AddValuesModalStyle.BackDrop>
  );
};
