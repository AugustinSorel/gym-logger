import { motion } from "framer-motion";
import styled from "styled-components";
import { InputShare } from "./share/input.styled";

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

export const InputDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const InputTitle = styled.h2`
  font-size: var(--font-size-medium);
  flex: 1;
`;

export const Input = styled(motion.input)`
  ${InputShare}
  width: 150px;

  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Button = styled(motion.button)`
  ${InputShare}
  color: var(--primary);
  background-color: var(--text-color);
  cursor: pointer;
`;
