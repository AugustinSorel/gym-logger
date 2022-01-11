import useUser from "../../store/useUser";
import * as FooterStyled from "../../styles/BottomToolbar.styled";
import { DropDownMenu } from "../DropDownMenu";
import { LinkButton } from "../LinkButton";

export const BottomToolbar = () => {
  const user = useUser((state) => state.user);

  const AuthenticationButtons = () => {
    return (
      <>
        <LinkButton to="/login" text="Login" />
        <LinkButton to="/sign-up" text="Sign Up" />
      </>
    );
  };

  return (
    <FooterStyled.Container>
      {user ? <DropDownMenu /> : <AuthenticationButtons />}
    </FooterStyled.Container>
  );
};
