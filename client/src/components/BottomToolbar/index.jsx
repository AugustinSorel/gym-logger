import useUser from "../../store/useUser";
import * as FooterStyled from "../../styles/BottomToolbar.styled";
import { AccountIcon } from "../AccountIcon";
import { DropDownMenu } from "../DropDownMenu";
import { LinkButton } from "../LinkButton";

export const Footer = () => {
  const userToken = useUser((state) => state.userToken);

  const AuthenticationButtons = () => {
    return (
      <FooterStyled.AuthenticationButtonsContainer>
        <LinkButton to="/login" text="Login" />
        <LinkButton to="/sign-up" text="Sign Up" />
      </FooterStyled.AuthenticationButtonsContainer>
    );
  };

  const Toolbar = () => {
    return (
      <FooterStyled.ToolBarContainer>
        <DropDownMenu />
        <AccountIcon />
      </FooterStyled.ToolBarContainer>
    );
  };

  if (userToken) {
    return <Toolbar />;
  }

  return <AuthenticationButtons />;
};
