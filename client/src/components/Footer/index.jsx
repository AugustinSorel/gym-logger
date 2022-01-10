import { useState } from "react";
import * as FooterStyled from "../../styles/Footer.styled";
import { DropDownMenu } from "../DropDownMenu";
import { PillButton } from "../PillButton";

export const Footer = () => {
  const [isAuthenticated] = useState(false);

  return (
    <FooterStyled.Container isAuthenticated={isAuthenticated}>
      {isAuthenticated ? (
        <DropDownMenu />
      ) : (
        <>
          <PillButton text="Login" />
          <PillButton text="Sign Up" />
        </>
      )}
    </FooterStyled.Container>
  );
};
