import useUser from "../../store/useUser";
import * as FooterStyled from "../../styles/BottomToolbar.styled";
import { DropDownMenu } from "../DropDownMenu";
import { LinkButton } from "../LinkButton";

export const BottomToolbar = () => {
  const userToken = useUser((state) => state.userToken);

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
      {userToken ? <DropDownMenu /> : <AuthenticationButtons />}
    </FooterStyled.Container>
  );
};
