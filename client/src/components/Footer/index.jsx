import { useState } from "react";
import {
  whileFocusButton,
  whileHoverButton,
  whileTapButton,
} from "../../framer-motion/whileVariants";
import * as FooterStyled from "../../styles/Footer.styled";
import { DropDownMenu } from "../DropDownMenu";

export const Footer = () => {
  const [isAuthenticated] = useState(false);

  return (
    <FooterStyled.Container isAuthenticated={isAuthenticated}>
      {isAuthenticated ? (
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
