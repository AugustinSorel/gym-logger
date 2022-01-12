import {
  whileHoverScale,
  whileTapScale,
} from "../../framer-motion/whileVariants";
import * as RoundedButtonStyle from "../../styles/RoundedButton.styled";

export const RoundedButton = ({ text, onClick }) => {
  return (
    <RoundedButtonStyle.Button
      whileTap={whileTapScale}
      whileHover={whileHoverScale}
      onClick={() => onClick()}
    >
      {text}
    </RoundedButtonStyle.Button>
  );
};
