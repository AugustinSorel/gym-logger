import useModal from "../../store/useModal";
import * as MainStyled from "../../styles/GraphSection3.styled";
import { AddButton } from "../AddButton";
import { AddValuesModal } from "../AddValuesModal";
import { AnimatePresence } from "framer-motion";

export const GraphSection = () => {
  const isOpen = useModal((state) => state.isOpen);
  return (
    <MainStyled.Container>
      <h1>This is the main</h1>
      <AddButton />
      <AnimatePresence exitBeforeEnter>
        {isOpen && <AddValuesModal />}
      </AnimatePresence>
    </MainStyled.Container>
  );
};