import useModal from "../../store/useModal";
import * as MainStyled from "../../styles/Main.styled";
import { AddButton } from "../AddButton";
import { AddValuesModal } from "../AddValuesModal";
import { AnimatePresence } from "framer-motion";
import useUser from "../../store/useUser";
import { Warning } from "../Warning";

export const Main = () => {
  const isOpen = useModal((state) => state.isOpen);
  const user = useUser((state) => state.user);

  const GraphSection = () => {
    return <div></div>;
  };

  // bug here, modal doesn't close properly on exit
  if (user) {
    return (
      <MainStyled.Container>
        <h1>This is the main</h1>
        <AddButton />
        <AnimatePresence exitBeforeEnter>
          {isOpen && <AddValuesModal />}
        </AnimatePresence>
      </MainStyled.Container>
    );
  }

  return <Warning text={"Your session has expired"} />;
};
