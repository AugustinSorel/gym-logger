import * as AddButtonStyle from "../../styles/AddButton.styled";
import {
  whileHoverScale,
  whileTapScale,
} from "../../framer-motion/whileVariants";
import useModal from "../../store/useModal";

export const AddButton = () => {
  const openModal = useModal((state) => state.openModal);

  return (
    <AddButtonStyle.Button
      whileTap={whileTapScale}
      whileHover={whileHoverScale}
      onClick={() => openModal()}
    >
      +
    </AddButtonStyle.Button>
  );
};
