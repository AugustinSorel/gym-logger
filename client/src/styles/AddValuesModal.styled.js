import { motion } from "framer-motion";
import styled from "styled-components";
import { InputShare } from "./share/input.styled";

export const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

export const Title = styled.h1`
  font-size: var(--font-size-large);
  text-align: center;
  padding: 1rem;
  border-color: var(--text-color);
  border-bottom: var(--border-height) solid;
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
