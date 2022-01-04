import * as DropDownMenuStyle from "../../styles/DropDownMenu.styled";
import { ReactComponent as UpArrowSvg } from "../../assets/upArrow.svg";
import {
  whileHoverScale,
  whileTapScale,
} from "../../framer-motion/whileVariants";

export const DropDownMenu = () => {
  return (
    <DropDownMenuStyle.Container
      whileHover={whileHoverScale}
      whileTap={whileTapScale}
    >
      <DropDownMenuStyle.Title>Bench Press</DropDownMenuStyle.Title>
      <UpArrowSvg />
    </DropDownMenuStyle.Container>
  );
};
