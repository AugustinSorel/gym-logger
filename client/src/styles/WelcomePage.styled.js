import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.main)`
  flex: 1;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Title = styled.h2`
  padding: 1rem;
  font-size: var(--font-size-large);
  text-align: center;
`;

export const IconsContainer = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: space-evenly;
`;

export const IconContainer = styled(motion.li)`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Icon = styled.div`
  border-radius: 50%;
  height: 100px;
  width: 100px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-color: var(--text-color);
  border: var(--border-height) solid;
`;

export const IconLabel = styled.h3`
  font-size: var(--font-size-medium);
  user-select: none;
`;

export const ButtonsContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
