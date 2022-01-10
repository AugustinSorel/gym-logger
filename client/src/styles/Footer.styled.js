import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { InputShare } from "./share/input.styled";

export const Container = styled.footer`
  background-color: transparent;
  padding: 1rem;
  border-top: var(--border-height) solid var(--text-color);

  display: flex;
  justify-content: ${(props) =>
    props.isAuthenticated ? "center" : "space-around"};
  align-items: center;
`;

export const LinkContainer = styled(motion(Link))`
  ${InputShare}
  font-size: var(--font-size-medium);
  color: var(--primary);
  background-color: var(--text-color);
  padding: 1rem 2rem;
  cursor: pointer;
  text-decoration: none;
`;
