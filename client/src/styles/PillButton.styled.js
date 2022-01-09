import { motion } from "framer-motion";
import styled from "styled-components";
import { InputShare } from "./share/input.styled";

export const Container = styled(motion.button)`
  ${InputShare}
  font-size: var(--font-size-small);
  color: var(--primary);
  background-color: var(--text-color);
  cursor: pointer;
`;
