import styled from "styled-components";

export const Container = styled.main`
  flex: 1;
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  padding-left: 0;
`;

export const GraphContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const GraphTitle = styled.h2`
  font-size: var(--font-size-medium);
`;
