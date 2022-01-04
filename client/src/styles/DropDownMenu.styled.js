import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 2rem;
  cursor: pointer;
  border-color: var(--text-color);
  border: 3px solid;
  padding: 1rem 2rem;
`;

export const Title = styled.h2`
  font-size: var(--font-size-medium);
`;
