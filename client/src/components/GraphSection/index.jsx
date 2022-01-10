import useModal from "../../store/useModal";
import * as MainStyled from "../../styles/GraphSection.styled";
import { AddButton } from "../AddButton";
import { AddValuesModal } from "../AddValuesModal";
import { AnimatePresence } from "framer-motion";
import useUser from "../../store/useUser";

export const GraphSection = () => {
  const isOpen = useModal((state) => state.isOpen);
  const user = useUser((state) => state.user);

  function displayUserNotloggedIn() {
    return <h1>Please log in to see your data</h1>;
  }

  function displayGraph() {
    return (
      <>
        <h1>This is the main</h1>
        <AddButton />
        <AnimatePresence exitBeforeEnter>
          {isOpen && <AddValuesModal />}
        </AnimatePresence>
      </>
    );
  }

  return (
    <MainStyled.Container>
      {user ? displayGraph() : displayUserNotloggedIn()}
    </MainStyled.Container>
  );
};
