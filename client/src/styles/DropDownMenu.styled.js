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
  width: 400px;

  grid-column-start: 2;

  position: relative;
  display: flex;

  @media (max-width: 768px) {
    width: 225px;
  }
`;

export const Title = styled.h2`
  font-size: var(--font-size-medium);
  flex: 1;
  user-select: none;
`;

export const ListContainer = styled(motion.ul)`
  backdrop-filter: blur(4px);
  position: absolute;
  z-index: 1;
  bottom: 100%;
  width: 100%;
  left: 0;

  padding: 1rem;
  border-color: var(--text-color);
  border: var(--border-height) solid;
  border-radius: 24px;
  list-style: none;

  overflow-x: hidden;

  gap: 1rem;
  flex-direction: column;
`;
