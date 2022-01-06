import { listItemsVariants } from "../../framer-motion/dropDownVariants";
import {
  whileHoverScale,
  whileTapScale,
} from "../../framer-motion/whileVariants";
import useExercise from "../../store/useExercise";
import * as DropDownItemStyle from "../../styles/DropDownItem.styled";

export const DropDownItem = ({ children }) => {
  const setExercise = useExercise((state) => state.setExercise);
  const handleClick = () => {
    setExercise(children);
  };

  return (
    <DropDownItemStyle.Container
      variants={listItemsVariants}
      onClick={handleClick}
    >
      <DropDownItemStyle.Title
        whileHover={whileHoverScale}
        whileTap={whileTapScale}
      >
        {children}
      </DropDownItemStyle.Title>
    </DropDownItemStyle.Container>
  );
};
