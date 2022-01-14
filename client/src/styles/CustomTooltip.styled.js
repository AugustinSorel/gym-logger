import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 1;
  left: 0;

  width: max-content;

  padding: 1rem;
  border-radius: 24px;
  backdrop-filter: blur(4px);
`;

export const Title = styled.h1`
  font-size: var(--font-size-medium);
  text-align: center;
`;

export const ValueTitle = styled.h2`
  font-size: var(--font-size-small);
`;
