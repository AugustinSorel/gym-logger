import * as MainStyled from "../../styles/Main.styled";
import { AddButton } from "../AddButton";
import { AddValuesModal } from "../AddValuesModal";

export const Main = () => {
  return (
    <MainStyled.Container>
      <h1>This is the main</h1>
      <AddButton />
      {true && <AddValuesModal />}
    </MainStyled.Container>
  );
};
