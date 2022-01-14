import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.main`
  flex: 1;
  position: relative;

  display: flex;
  flex-direction: column;
`;

export const GraphContainer = styled.div`
  padding-top: 1rem;
  flex: 1;
`;

export const ButtonsContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-around;
`;

export const Button = styled(motion.button)`
  font-size: var(--font-size-small);
  color: inherit;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
