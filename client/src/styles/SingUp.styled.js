import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { InputShare } from "./share/input.styled";

export const Form = styled(motion.form)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;
  flex-direction: column;
  padding: 1rem;
`;

export const InputsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h2`
  font-size: var(--font-size-large);
  text-align: center;
`;

export const Input = styled(motion.input)`
  ${InputShare}
`;

export const BottomText = styled.p`
  font-size: var(--font-size-small);
  text-align: center;
`;

export const LinkStyle = styled(motion(Link))`
  color: var(--hover-color);
  font-weight: bold;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
