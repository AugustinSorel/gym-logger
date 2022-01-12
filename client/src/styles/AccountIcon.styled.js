import styled from "styled-components";

export const Container = styled.div`
  background-color: red;
  border-radius: 50%;
  width: 75px;
  height: 75px;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 20px;
  right: 20px;
`;

export const Title = styled.h2`
  font-size: var(--font-size-large);
  font-weight: 200;
  user-select: none;
`;
