import * as AddValueButtonStyle from "../../styles/AddValueButton.styled";
import useModal from "../../store/useModal";
import { RoundedButton } from "../RoundedButton";

export const AddValueButton = () => {
  const openAddValuesModal = useModal((state) => state.openAddValuesModal);

  return (
    <AddValueButtonStyle.Container>
      <RoundedButton text={"+"} onClick={openAddValuesModal} />
    </AddValueButtonStyle.Container>
  );
};
