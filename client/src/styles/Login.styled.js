import { motion } from "framer-motion";
import styled from "styled-components";
import { InputShare } from "./share/input.styled";
import { Link } from "react-router-dom";

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

export const LinkStyle = styled(motion(Link))``;
