import useModal from "../../store/useModal";
import * as MainStyled from "../../styles/Main'";
import { AddButton } from "../AddButton";
import { AddValuesModal } from "../AddValuesModal";
import { AnimatePresence } from "framer-motion";
import useUser from "../../store/useUser";

export const Main = () => {
  const isOpen = useModal((state) => state.isOpen);
  const user = useUser((state) => state.user);

  const GraphSection = () => {
    return (
      <>
        <h1>This is the main</h1>
        <AddButton />
        <AnimatePresence exitBeforeEnter>
          {isOpen && <AddValuesModal />}
        </AnimatePresence>
      </>
    );
  };

  const NotAuthenticatedSection = () => {
    return <h1>Not logged in</h1>;
  };

  return (
    <MainStyled.Container>
      {user ? <GraphSection /> : <NotAuthenticatedSection />}
    </MainStyled.Container>
  );
};
