import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { InputShare } from "./share/input.styled";

export const AuthenticationButtonsContainer = styled.footer`
  background-color: transparent;
  padding: 1rem;
  border-top: var(--border-height) solid var(--text-color);

  display: flex;
  justify-content: space-around;

  align-items: center;
`;

export const LinkContainer = styled(motion(Link))`
  ${InputShare}
  font-size: var(--font-size-medium);
  color: var(--primary);
  background-color: var(--text-color);
  padding: 1rem;
  cursor: pointer;
  text-decoration: none;
  width: max(100px, 30%);
  text-align: center;
`;
