import styled from "styled-components";

export const Container = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  & > svg {
    height: 50%;
    width: 50%;
    fill: var(--text-color);
  }
`;

export const Title = styled.h2`
  font-size: var(--font-size-large);
`;
