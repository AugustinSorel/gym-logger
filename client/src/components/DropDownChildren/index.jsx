import { listItemsVariants } from "../../framer-motion/dropDownVariants";
import {
  whileHoverScale,
  whileTapScale,
} from "../../framer-motion/whileVariants";
import * as DropDownChildrenStyled from "../../styles/DropDownChildren.styled";

export const DropDownChildren = ({ children }) => {
  return (
    <DropDownChildrenStyled.Container variants={listItemsVariants}>
      <DropDownChildrenStyled.Title
        whileHover={whileHoverScale}
        whileTap={whileTapScale}
      >
        {children}
      </DropDownChildrenStyled.Title>
    </DropDownChildrenStyled.Container>
  );
};
