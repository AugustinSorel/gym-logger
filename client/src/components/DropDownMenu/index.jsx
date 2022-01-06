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
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      onTap={() => setIsHover(!isHover)}
    >
      <DropDownMenuStyle.ListContainer
        variants={listContainerVariants}
        animate={isHover ? "hoverStart" : "hoverEnd"}
        initial="hoverEnd"
      >
        {exercisesList.map((item, index) => (
          <DropDownItem key={index} children={item} />
        ))}
      </DropDownMenuStyle.ListContainer>

      <DropDownMenuStyle.Title>{exercise}</DropDownMenuStyle.Title>
      <UpArrowSvg isHover={isHover} />
    </DropDownMenuStyle.Container>
  );
};
