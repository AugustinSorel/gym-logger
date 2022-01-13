import { motion } from "framer-motion";
import styled from "styled-components";
import { InputShare } from "./share/input.styled";

export const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const Title = styled.h1`
  font-size: var(--font-size-large);
  text-align: center;
  padding: 1rem;
  border-color: var(--text-color);
  border-bottom: var(--border-height) solid;
  text-transform: capitalize;
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
  width: max(200px, 50%);

  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DeleteAccountText = styled(motion.h2)`
  color: var(--invalid-input-color);
  font-size: var(--font-size-medium);
  cursor: pointer;
  flex: 1;
  text-align: center;
`;

export const LogoutAccountText = styled(motion.h2)`
  font-size: var(--font-size-medium);
  cursor: pointer;
  flex: 1;
  text-align: center;
`;
