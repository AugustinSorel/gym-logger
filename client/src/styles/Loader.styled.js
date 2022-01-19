import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  flex: 1;
`;

export const Circle = styled(motion.span)`
  width: 2rem;
  height: 2rem;
  background-color: var(--text-color);
  border-radius: 50%;
`;
