import * as HeaderStyles from "../../styles/Header.styled";
import { PillButton } from "../PillButton";

export const Header = () => {
  return (
    <HeaderStyles.Container>
      <HeaderStyles.Title>Gym Logger</HeaderStyles.Title>
      <PillButton />
      <PillButton />
    </HeaderStyles.Container>
  );
};
