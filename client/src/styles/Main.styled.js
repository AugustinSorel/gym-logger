import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.main`
  flex: 1;
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

export const GraphContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const GraphTitle = styled.h2`
  font-size: var(--font-size-medium);
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

export const Button = styled(motion.button)`
  font-size: var(--font-size-small);
  color: inherit;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
