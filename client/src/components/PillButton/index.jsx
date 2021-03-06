import {
  whileHoverButton,
  whileTapButton,
} from "../../framer-motion/whileVariants";
import * as ButtonStyle from "../../styles/PillButton.styled";

export const PillButton = ({ text, onClick }) => {
  return (
    <ButtonStyle.Container
      whileHover={whileHoverButton}
      whileTap={whileTapButton}
      onClick={onClick}
    >
      {text}
    </ButtonStyle.Container>
  );
};
