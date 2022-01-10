import styled from "styled-components";

export const Container = styled.footer`
  background-color: transparent;
  padding: 1rem;
  border-top: var(--border-height) solid var(--text-color);

  display: flex;
  justify-content: ${(props) =>
    props.isAuthenticated ? "center" : "space-around"};
  align-items: center;
`;
