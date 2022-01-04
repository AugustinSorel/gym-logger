import * as DropDownMenuStyle from "../../styles/DropDownMenu.styled";
import {
  whileHoverScale,
  whileTapScale,
} from "../../framer-motion/whileVariants";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const hoverVariants = {
  hoverStart: {
    rotate: 180,
    fill: "#fff",
  },

  hoverEnd: {
    rotate: 0,
    fill: "#b3b3b3",
  },
};

const listContainerVariants = {
  hoverStart: {
    opacity: 1,
    display: "block",
    backdropFilter: "blur(4px)",
    transition: { staggerChildren: 0.07 },
  },
  hoverEnd: {
    opacity: 0,
    backdropFilter: "blur(0px)",
    transitionEnd: {
      display: "none",
    },
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const listItemsVariants = {
  hoverStart: {
    x: 0,
  },
  hoverEnd: {
    x: 100,
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
      <AnimatePresence exitBeforeEnter>
        <DropDownMenuStyle.ListContainer
          variants={listContainerVariants}
          animate={isHover ? "hoverStart" : "hoverEnd"}
          initial="hoverEnd"
        >
          {["Bench Press", "Squat", "Biceps Curl", "lorem"].map(
            (item, index) => (
              <motion.li variants={listItemsVariants} key={index}>
                <h1>{item}</h1>
              </motion.li>
            )
          )}
        </DropDownMenuStyle.ListContainer>
      </AnimatePresence>

      <DropDownMenuStyle.Title>Bench Press</DropDownMenuStyle.Title>
      <motion.svg
        variants={hoverVariants}
        animate={isHover ? "hoverStart" : "hoverEnd"}
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
