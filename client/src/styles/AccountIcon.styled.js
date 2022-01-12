import styled from "styled-components";

export const Container = styled.div`
  background-color: red;
  border-radius: 50%;
  width: 75px;
  height: 75px;
  margin-left: auto;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;
