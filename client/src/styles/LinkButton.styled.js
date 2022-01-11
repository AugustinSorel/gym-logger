import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { InputShare } from "./share/input.styled";

export const Container = styled(motion(Link))`
  ${InputShare}
  border: none;
  color: var(--primary);
  background-color: var(--text-color);
  padding: 1rem 2rem;
  cursor: pointer;
  text-decoration: none;
  width: min(40%, 200px);
  text-align: center;
`;
