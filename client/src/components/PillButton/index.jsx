import * as ButtonStyle from "../../styles/PillButton.styled";

export const PillButton = ({ text }) => {
  return (
    <ButtonStyle.Container
      whileHover={{ backgroundColor: "#fff", color: "#000" }}
    >
      {text}
    </ButtonStyle.Container>
  );
};
