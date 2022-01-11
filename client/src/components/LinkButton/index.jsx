import {
  whileFocusButton,
  whileHoverButton,
  whileTapButton,
} from "../../framer-motion/whileVariants";
import * as LinkButtonStyle from "../../styles/LinkButton.styled";

export const LinkButton = ({ text, to }) => {
  return (
    <LinkButtonStyle.Container
      whileHover={whileHoverButton}
      whileTap={whileTapButton}
      whileFocus={whileFocusButton}
      to={to}
    >
      {text}
    </LinkButtonStyle.Container>
  );
};
