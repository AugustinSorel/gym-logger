import * as FooterStyled from "../../styles/BottomToolbar.styled";
import { DropDownMenu } from "../DropDownMenu";

export const BottomToolbar = () => {
  return (
    <FooterStyled.Container>
      <DropDownMenu />
    </FooterStyled.Container>
  );
};
