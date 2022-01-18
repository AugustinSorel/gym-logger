import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.main)`
  flex: 1;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  display: flex;
`;

export const BlurContainer = styled.div`
  backdrop-filter: blur(20px);
  flex: 1;

  display: grid;
  grid-template-columns: 20vw 1fr 20vw;
  grid-template-rows: 1fr 1fr;

  @media (max-width: 768px) {
    display: grid;
    grid-template-rows: repeat(4, auto);
    grid-template-columns: none;
  }
`;

export const ContentContainer = styled.div`
  grid-column-start: 2;
  background-color: red;

  @media (max-width: 768px) {
    grid-column-start: 1;
  }

  /* display: flex; */
`;

export const ParagraphContainer = styled.div`
  grid-row-start: 2;
  grid-column-start: 2;
  background-color: green;

  @media (max-width: 768px) {
    grid-column-start: 1;
  }
`;

export const LogosContainer = styled.div`
  background-color: blue;
  grid-row: span 2;
  @media (max-width: 768px) {
    grid-row: span 1;
  }
`;

export const IconContainer = styled.div`
  background-color: yellow;
`;

export const Title = styled.h2`
  font-size: var(--font-size-large);
`;
