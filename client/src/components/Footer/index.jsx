import useUser from "../../store/useUser";
import * as FooterStyled from "../../styles/Footer.styled";
import { DropDownMenu } from "../DropDownMenu";
import { LinkButton } from "../LinkButton";

export const Footer = () => {
  const userToken = useUser((state) => state.userToken);

  const ButtonsAuthentication = () => {
    return (
      <>
        <LinkButton to="/login" text="Login" />
        <LinkButton to="/sign-up" text="Sign Up" />
      </>
    );
  };

  return (
    <FooterStyled.Container>
      {userToken ? <DropDownMenu /> : <ButtonsAuthentication />}
    </FooterStyled.Container>
  );
};
