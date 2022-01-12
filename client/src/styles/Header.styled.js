import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  padding: 1rem;
  border-bottom: var(--border-height) solid var(--text-color);
  display: grid;
`;

export const Title = styled(motion(Link))`
  font-size: var(--font-size-large);
  text-align: center;
  color: inherit;
  text-decoration: none;
  font-weight: bold;
`;
