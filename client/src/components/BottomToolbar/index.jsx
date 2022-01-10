import {
  whileFocusButton,
  whileHoverButton,
  whileTapButton,
} from "../../framer-motion/whileVariants";
import * as FooterStyled from "../../styles/BottomToolbar.styled";
import { DropDownMenu } from "../DropDownMenu";
import useUser from "../../store/useUser";

export const BottomToolbar = () => {
  const user = useUser((state) => state.user);

  return (
    <FooterStyled.Container isAuthenticated={user}>
      {user ? (
        <DropDownMenu />
      ) : (
        <>
          <FooterStyled.LinkContainer
            to={"/login"}
            whileHover={whileHoverButton}
            whileTap={whileTapButton}
            whileFocus={whileFocusButton}
          >
            Login
          </FooterStyled.LinkContainer>
          <FooterStyled.LinkContainer
            to={"/sign-up"}
            whileHover={whileHoverButton}
            whileTap={whileTapButton}
            whileFocus={whileFocusButton}
          >
            Sign Up
          </FooterStyled.LinkContainer>
        </>
      )}
    </FooterStyled.Container>
  );
};
