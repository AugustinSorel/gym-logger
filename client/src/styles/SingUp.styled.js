import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { InputShare } from "./share/input.styled";

export const Container = styled(motion.main)`
  flex: 1;
`;

export const Form = styled.form`
  height: 100%;
  display: grid;
  place-content: center;
  gap: 1rem;
  flex-direction: column;
  padding: 1rem;
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
