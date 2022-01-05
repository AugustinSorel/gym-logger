import * as DropDownMenuStyle from "../../styles/DropDownMenu.styled";
import {
  whileHoverScale,
  whileTapScale,
} from "../../framer-motion/whileVariants";
import { useState } from "react";
import { listContainerVariants } from "../../framer-motion/dropDownVariants";
import { UpArrowSvg } from "../UpArrowSvg";
import { DropDownChildren } from "../DropDownChildren";

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
          <DropDownChildren key={index} children={item} />
        ))}
      </DropDownMenuStyle.ListContainer>

      <DropDownMenuStyle.Title>Bench Press</DropDownMenuStyle.Title>
      <UpArrowSvg isHover={isHover} />
    </DropDownMenuStyle.Container>
  );
};
