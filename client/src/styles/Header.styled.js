import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  padding: 1rem;
  border-bottom: var(--border-height) solid var(--text-color);
  display: grid;
  grid-template-columns: 1fr auto 1fr;
`;

export const Title = styled(motion(Link))`
  font-size: var(--font-size-large);
  color: inherit;
  text-decoration: none;
  font-weight: bold;

  grid-column-start: 2;
`;
