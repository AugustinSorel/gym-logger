import styled from "styled-components";

export const Container = styled.footer`
  background-color: transparent;
  padding: 1rem;
  border-top: var(--border-height) solid var(--text-color);

  display: grid;
  grid-template-columns: 1fr auto 1fr;

  justify-content: space-around;

  align-items: center;
`;
