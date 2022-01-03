import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  border-radius: 24px;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`;

export const Title = styled.h2`
  font-size: var(--font-size-medium);
`;

export const IconContainer = styled(motion.div)`
  padding: 1rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  border-color: var(--text-color);
  border: var(--border-height) solid;
`;
