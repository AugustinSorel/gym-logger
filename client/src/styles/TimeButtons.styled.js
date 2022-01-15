import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

export const Button = styled.button`
  font-size: var(--font-size-small);
  color: ${(props) =>
    props.isActive ? "var(--hover-color)" : "var(--text-color)"};
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
