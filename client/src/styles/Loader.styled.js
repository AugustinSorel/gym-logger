import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  width: 300px;
  display: flex;
  justify-content: space-around;
  padding: 2rem;
`;

export const Circle = styled(motion.span)`
  width: 2rem;
  height: 2rem;
  background-color: var(--primary);
  border-radius: 50%;
`;
