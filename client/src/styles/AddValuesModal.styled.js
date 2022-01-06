import { motion } from "framer-motion";
import styled from "styled-components";

export const BackDrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;

  display: grid;
  gap: 3rem;
  place-content: center;
`;

export const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

export const Title = styled.h1`
  font-size: var(--font-size-large);
  text-align: center;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled(motion.input)`
  font-size: var(--font-size-medium);
  background-color: transparent;
  padding: 1rem;
  border-color: var(--text-color);
  border: var(--border-height) solid;
  color: inherit;
  outline: none;
  border-radius: 24px;
`;

export const Button = styled(motion.button)`
  font-size: var(--font-size-medium);
  background-color: var(--text-color);
  padding: 1rem;
  border-color: var(--text-color);
  border: var(--border-height) solid;
  color: inherit;
  outline: none;
  color: var(--primary);
  border-radius: 24px;
  cursor: pointer;
`;
