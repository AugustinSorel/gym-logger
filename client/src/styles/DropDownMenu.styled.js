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

  position: relative;
`;

export const Title = styled.h2`
  font-size: var(--font-size-medium);
`;

export const ListContainer = styled(motion.ul)`
  position: absolute;
  bottom: 100%;
  width: 100%;
  left: 0;

  padding: 1rem;
  border-color: var(--text-color);
  border: var(--border-height) solid;
  border-radius: 24px;
`;
