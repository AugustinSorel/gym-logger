import {
  whileFocusScale,
  whileHoverScale,
  whileTapScale,
} from "../../framer-motion/whileVariants";
import * as HeaderStyles from "../../styles/Header.styled";

export const Header = () => {
  return (
    <HeaderStyles.Container>
      <HeaderStyles.Title
        to={"/"}
        whileHover={whileHoverScale}
        whileTap={whileTapScale}
        whileFocus={whileFocusScale}
      >
        Gym Logger
      </HeaderStyles.Title>
    </HeaderStyles.Container>
  );
};
