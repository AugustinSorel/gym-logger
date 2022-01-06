import * as AddButtonStyle from "../../styles/AddButton.styled";
import {
  whileHoverScale,
  whileTapScale,
} from "../../framer-motion/whileVariants";

export const AddButton = () => {
  return (
    <AddButtonStyle.Button
      whileTap={whileTapScale}
      whileHover={whileHoverScale}
    >
      +
    </AddButtonStyle.Button>
  );
};
