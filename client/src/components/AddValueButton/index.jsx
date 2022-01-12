import * as AddValueButtonStyle from "../../styles/AddValueButton.styled";
import useModal from "../../store/useModal";
import { RoundedButton } from "../RoundedButton";

export const AddValueButton = () => {
  const openModal = useModal((state) => state.openModal);

  return (
    <AddValueButtonStyle.Container>
      <RoundedButton text={"+"} onClick={openModal} />
    </AddValueButtonStyle.Container>
  );
};
