import * as HeaderStyles from "../../styles/Header.styled";
import {
  whileHoverScale,
  whileTapScale,
} from "../../framer-motion/whileVariants";
import { AccountIcon } from "../AccountIcon";

export const Header = () => {
  return (
    <HeaderStyles.Container>
      <HeaderStyles.Title
        to="/"
        whileHover={whileHoverScale}
        whileTap={whileTapScale}
      >
        Gym Logger
      </HeaderStyles.Title>
      <AccountIcon />
    </HeaderStyles.Container>
  );
};
