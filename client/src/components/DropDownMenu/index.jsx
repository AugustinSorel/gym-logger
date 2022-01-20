import * as DropDownMenuStyle from "../../styles/DropDownMenu.styled";
import { useState } from "react";
import { listContainerVariants } from "../../framer-motion/dropDownVariants";
import { UpArrowSvg } from "../UpArrowSvg";
import { DropDownItem } from "../DropDownItem";
import exercisesList from "../../utils/exercisesList";
import useExercise from "../../store/useExercise";

export const DropDownMenu = () => {
  const [isHover, setIsHover] = useState(false);
  const exercise = useExercise((state) => state.exercise);

  return (
    <DropDownMenuStyle.Container
      whileHover={{ color: "#fff", scale: 1.02 }}
      whileTap={{ color: "#fff", scale: 0.98 }}
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      onTap={() => setIsHover(!isHover)}
      onBlur={() => console.log("lost focus")}
    >
      <DropDownMenuStyle.ListContainer
        variants={listContainerVariants}
        animate={isHover ? "hoverStart" : "hoverEnd"}
        initial="hoverEnd"
        onBlur={() => console.log("lost focus")}
      >
        {exercisesList.map((item, index) => (
          <DropDownItem key={index} children={item} isHover={isHover} />
        ))}
      </DropDownMenuStyle.ListContainer>

      <DropDownMenuStyle.Title>{exercise}</DropDownMenuStyle.Title>
      <UpArrowSvg isHover={isHover} />
    </DropDownMenuStyle.Container>
  );
};
