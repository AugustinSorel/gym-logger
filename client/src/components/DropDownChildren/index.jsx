import { listItemsVariants } from "../../framer-motion/dropDownVariants";
import {
  whileHoverScale,
  whileTapScale,
} from "../../framer-motion/whileVariants";
import * as DropDownChildrenStyled from "../../styles/DropDownChildren.styled";

export const DropDownChildren = ({ children }) => {
  const handleClick = (e) => {
    console.log("e");
  };

  return (
    <DropDownChildrenStyled.Container
      variants={listItemsVariants}
      onClick={handleClick}
    >
      <DropDownChildrenStyled.Title
        whileHover={whileHoverScale}
        whileTap={whileTapScale}
      >
        {children}
      </DropDownChildrenStyled.Title>
    </DropDownChildrenStyled.Container>
  );
};
