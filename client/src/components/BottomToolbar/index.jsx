import useUser from "../../store/useUser";
import * as FooterStyled from "../../styles/BottomToolbar.styled";
import { DropDownMenu } from "../DropDownMenu";

export const BottomToolbar = () => {
  const user = useUser((state) => state.user);

  const AuthenticationButtons = () => {
    return <h1>Not Logged in</h1>;
  };

  return (
    <FooterStyled.Container>
      {user ? <DropDownMenu /> : <AuthenticationButtons />}
    </FooterStyled.Container>
  );
};
