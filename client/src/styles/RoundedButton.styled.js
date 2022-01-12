import { motion } from "framer-motion";
import styled from "styled-components";

export const Button = styled(motion.button)`
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
  text-transform: capitalize;
`;
