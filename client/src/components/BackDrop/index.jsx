import { backdropVariants } from "../../framer-motion/backDropVariants";
import * as BackDropStyle from "../../styles/BackDrop.styled";

export const BackDrop = ({ children, closeModal }) => {
  return (
    <BackDropStyle.Container
      onClick={() => closeModal()}
      variants={backdropVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </BackDropStyle.Container>
  );
};
