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

export const AddValuesModal = () => {
  const closeModal = useModal((state) => state.closeModal);
  const exercise = useExercise((state) => state.exercise);
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
              whileHover={whileHoverScale}
              whileTap={whileTapScale}
              whileFocus={whileHoverScale}
              type="number"
            />
          </AddValuesModalStyle.InputDetailsContainer>

          <AddValuesModalStyle.InputDetailsContainer>
            <AddValuesModalStyle.InputTitle>
              Weight:
            </AddValuesModalStyle.InputTitle>
            <AddValuesModalStyle.Input
              placeholder="50"
              whileHover={whileHoverScale}
              whileTap={whileTapScale}
              whileFocus={whileHoverScale}
              type="number"
            />
          </AddValuesModalStyle.InputDetailsContainer>
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
