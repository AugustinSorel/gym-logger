import { listItemsVariants } from "../../framer-motion/dropDownVariants";
import {
  whileHoverScale,
  whileTapScale,
} from "../../framer-motion/whileVariants";
import useExercise from "../../store/useExercise";
import * as DropDownChildrenStyled from "../../styles/DropDownChildren.styled";

export const DropDownItem = ({ children }) => {
  const setExercise = useExercise((state) => state.setExercise);
  const handleClick = () => {
    setExercise(children);
  };

  return (
    <DropDownChildrenStyled.Container
      variants={listItemsVariants}
      onClick={handleClick}
    >
      <DropDownChildrenStyled.Title
        whileHover={whileHoverScale}
        whileTap={whileTapScale}
      >
        {children}
      </DropDownChildrenStyled.Title>
    </DropDownChildrenStyled.Container>
  );
};
