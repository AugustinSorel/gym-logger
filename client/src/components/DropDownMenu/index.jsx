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
    stroke: "#fff",
  },

  hoverEnd: {
    rotate: 0,
    stroke: "#b3b3b3",
  },
};

const listContainerVariants = {
  hoverStart: {
    y: 0,
    opacity: 1,
    display: "flex",
    backdropFilter: "blur(4px)",
    transition: { staggerChildren: 0.07, delayChildren: 0.3 },
  },
  hoverEnd: {
    y: "100%",
    opacity: 0,
    backdropFilter: "blur(0px)",
    transitionEnd: {
      display: "none",
    },
    transition: { staggerChildren: 0.05, staggerDirection: -1, delay: 0.5 },
  },
};

const listItemsVariants = {
  hoverStart: {
    opacity: 1,
    x: 0,
  },
  hoverEnd: {
    opacity: 0,
    x: -20,
  },
};

export const DropDownMenu = () => {
  const [isHover, setIsHover] = useState(true);

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
      <motion.svg
        variants={hoverVariants}
        animate={isHover ? "hoverStart" : "hoverEnd"}
        stroke="#b3b3b3"
        strokeWidth={2}
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
