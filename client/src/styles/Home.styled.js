import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { InputShare } from "./share/input.styled";

export const Container = styled(motion.main)`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ContentContainer = styled.section`
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

export const TitlesContainer = styled.div``;

export const Title = styled.h2`
  font-size: var(--font-size-large);
  text-align: center;
`;

export const LinksContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
export const LinkStyled = styled(motion(Link))`
  ${InputShare}
  border: none;
  font-size: var(--font-size-medium);
  color: var(--primary);
  background-color: var(--text-color);
  padding: 1rem 2rem;
  cursor: pointer;
  text-decoration: none;
  width: min(40%, 200px);
  text-align: center;
`;
