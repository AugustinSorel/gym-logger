import * as DropDownMenuStyle from "../../styles/DropDownMenu.styled";
import {
  whileHoverScale,
  whileTapScale,
} from "../../framer-motion/whileVariants";
import { useState } from "react";
import { motion } from "framer-motion";

const hoverVariants = {
  hoverStart: {
    rotate: 180,
    fill: "#b3b3b3",
  },

  hoverEnd: {
    rotate: 0,
    fill: "#fff",
  },
};

const listContainerVariants = {
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export const DropDownMenu = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <DropDownMenuStyle.Container
      whileHover={whileHoverScale}
      whileTap={whileTapScale}
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
    >
      <DropDownMenuStyle.ListContainer
        initial="exit"
        animate={isHover ? "enter" : "exit"}
        variants={listContainerVariants}
      >
        <h1>Hello World 1</h1>
        <h1>Hello World 2</h1>
        <h1>Hello World 3</h1>
      </DropDownMenuStyle.ListContainer>

      <DropDownMenuStyle.Title>Bench Press</DropDownMenuStyle.Title>
      <motion.svg
        variants={hoverVariants}
        animate={isHover ? "hoverEnd" : "hoverStart"}
        fill="#b3b3b3"
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
      >
        <path d="M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z" />
      </motion.svg>
    </DropDownMenuStyle.Container>
  );
};
