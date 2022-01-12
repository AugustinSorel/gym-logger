import useModal from "../../store/useModal";
import { BackDrop } from "../BackDrop";
import * as AccountModalStyle from "../../styles/AccountModal.styled";
import { dropInVariants } from "../../framer-motion/backDropVariants";

export const AccountModal = () => {
  const closeAccountModal = useModal((state) => state.closeAccountModal);

  return (
    <BackDrop closeModal={closeAccountModal}>
      <AccountModalStyle.Container
        variants={dropInVariants}
        onClick={(e) => e.stopPropagation()}
      >
        <h1>This is the account modal</h1>
      </AccountModalStyle.Container>
    </BackDrop>
  );
};
