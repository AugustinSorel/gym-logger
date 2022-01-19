import * as HeaderStyles from "../../styles/Header.styled";
import {
  whileHoverScale,
  whileTapScale,
} from "../../framer-motion/whileVariants";

export const Header = () => {
  return (
    <HeaderStyles.Container>
      <HeaderStyles.Title
        to="/"
        whileHover={whileHoverScale}
        whileTap={whileTapScale}
      >
        Gym Logger Update test
      </HeaderStyles.Title>
    </HeaderStyles.Container>
  );
};
