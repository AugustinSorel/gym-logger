import * as HeaderStyles from "../../styles/Header.styled";

export const Header = ({ text }) => {
  return (
    <HeaderStyles.Container>
      <HeaderStyles.Title>{text}</HeaderStyles.Title>
    </HeaderStyles.Container>
  );
};
