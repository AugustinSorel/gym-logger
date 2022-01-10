import * as ButtonStyle from "../../styles/PillButton.styled";

export const PillButton = ({ text, onClick }) => {
  return (
    <ButtonStyle.Container
      whileHover={{ backgroundColor: "#fff", color: "#000", scale: 1.1 }}
      whileTap={{ backgroundColor: "#fff", scale: 1 }}
      whileFocus={{ backgroundColor: "#fff", color: "#000" }}
      onClick={onClick}
    >
      {text}
    </ButtonStyle.Container>
  );
};
