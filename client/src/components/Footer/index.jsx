import useUser from "../../store/useUser";
import * as FooterStyled from "../../styles/Footer.styled";
import { BottomToolbar } from "../BottomToolbar";
import { LinkButton } from "../LinkButton";

export const Footer = () => {
  const userToken = useUser((state) => state.userToken);

  if (userToken) {
    return <BottomToolbar />;
  }

  return (
    <FooterStyled.AuthenticationButtonsContainer>
      <LinkButton to="/login" text="Login" />
      <LinkButton to="/sign-up" text="Sign Up" />
    </FooterStyled.AuthenticationButtonsContainer>
  );
};
