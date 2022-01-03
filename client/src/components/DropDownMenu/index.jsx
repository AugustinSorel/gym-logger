import * as DropDownMenuStyle from "../../styles/DropDownMenu.styled";
import { ReactComponent as UpArrowSvg } from "../../assets/upArrow.svg";

export const DropDownMenu = () => {
  return (
    <DropDownMenuStyle.Container
      whileHover={{ scale: 1.1, color: "#fff" }}
      whileTap={{ scale: 0.9, color: "#fff" }}
    >
      <DropDownMenuStyle.Title>Bench Press</DropDownMenuStyle.Title>
      <DropDownMenuStyle.IconContainer>
        <UpArrowSvg />
      </DropDownMenuStyle.IconContainer>
    </DropDownMenuStyle.Container>
  );
};
