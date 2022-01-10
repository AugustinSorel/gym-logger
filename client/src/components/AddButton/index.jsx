import * as AddButtonStyle from "../../styles/AddButton.styled";
import {
  whileFocusScale,
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
      whileFocus={whileFocusScale}
      onClick={() => openModal()}
    >
      +
    </AddButtonStyle.Button>
  );
};
