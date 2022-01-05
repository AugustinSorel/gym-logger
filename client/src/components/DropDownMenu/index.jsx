import * as DropDownMenuStyle from "../../styles/DropDownMenu.styled";
import {
  whileHoverScale,
  whileTapScale,
} from "../../framer-motion/whileVariants";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  listContainerVariants,
  listItemsVariants,
} from "../../framer-motion/dropDownVariants";
import { UpArrowSvg } from "../UpArrowSvg";

export const DropDownMenu = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <DropDownMenuStyle.Container
      whileHover={whileHoverScale}
      whileTap={whileTapScale}
      onClick={() => setIsHover(!isHover)}
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
    >
      <DropDownMenuStyle.ListContainer
        variants={listContainerVariants}
        animate={isHover ? "hoverStart" : "hoverEnd"}
        initial="hoverEnd"
      >
        {["Bench Press", "Squat", "Biceps Curl", "lorem"].map((item, index) => (
          <motion.li variants={listItemsVariants} key={index}>
            <DropDownMenuStyle.ListItemTitle
              whileHover={whileHoverScale}
              whileTap={whileTapScale}
            >
              {item}
            </DropDownMenuStyle.ListItemTitle>
          </motion.li>
        ))}
      </DropDownMenuStyle.ListContainer>

      <DropDownMenuStyle.Title>Bench Press</DropDownMenuStyle.Title>
      <UpArrowSvg isHover={isHover} />
    </DropDownMenuStyle.Container>
  );
};
