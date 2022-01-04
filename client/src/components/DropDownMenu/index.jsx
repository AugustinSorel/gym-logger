import * as DropDownMenuStyle from "../../styles/DropDownMenu.styled";
import { ReactComponent as UpArrowSvg } from "../../assets/upArrow.svg";
import {
  whileHoverScale,
  whileTapScale,
} from "../../framer-motion/whileVariants";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";

export const DropDownMenu = () => {
  const [show, setShow] = useState(false);

  const control = useAnimation();

  return (
    <DropDownMenuStyle.Container
      whileHover={whileHoverScale}
      whileTap={whileTapScale}
      onHoverStart={() => {
        setShow(true);
        control.start({ rotate: 180 });
      }}
      onHoverEnd={() => {
        setShow(false);
        control.start({ rotate: 0 });
      }}
    >
      {show && (
        <DropDownMenuStyle.ListContainer>
          <h1>Hello World 1</h1>
          <h1>Hello World 2</h1>
          <h1>Hello World 3</h1>
        </DropDownMenuStyle.ListContainer>
      )}
      <DropDownMenuStyle.Title>Bench Press</DropDownMenuStyle.Title>
      <motion.svg
        animate={control}
        fill="#fff"
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
