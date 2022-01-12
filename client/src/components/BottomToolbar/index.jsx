import * as BottomToolbarStyle from "../../styles/BottomToolbar.styled";
import { AccountIcon } from "../AccountIcon";
import { DropDownMenu } from "../DropDownMenu";

export const BottomToolbar = () => {
  return (
    <BottomToolbarStyle.Container>
      <DropDownMenu />
      <AccountIcon />
    </BottomToolbarStyle.Container>
  );
};
