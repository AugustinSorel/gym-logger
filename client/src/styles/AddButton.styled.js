import styled from "styled-components";
import { motion } from "framer-motion";

export const Button = styled(motion.button)`
  position: absolute;
  bottom: 20px;
  right: 20px;
  height: 75px;
  width: 75px;
  font-size: var(--font-size-large);
  background-color: transparent;
  color: inherit;
  border: 3px solid;
  border-radius: 50%;
  user-select: none;
  backdrop-filter: blur(4px);
  cursor: pointer;
  outline: none;
`;
