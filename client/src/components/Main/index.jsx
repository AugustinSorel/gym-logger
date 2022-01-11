import useModal from "../../store/useModal";
import * as MainStyled from "../../styles/Main.styled";
import { AddButton } from "../AddButton";
import { AddValuesModal } from "../AddValuesModal";
import { AnimatePresence } from "framer-motion";
import useUser from "../../store/useUser";
import { ReactComponent as WarningSvg } from "../../assets/warning.svg";

export const Main = () => {
  const isOpen = useModal((state) => state.isOpen);
  const user = useUser((state) => state.user);

  const GraphSection = () => {
    return <div></div>;
  };

  const NotAuthenticatedSection = () => {
    return (
      <>
        {/* <WarningSvg /> */}
        <h1>Not logged in</h1>
      </>
    );
  };

  // bug here, modal doesn't close properly on exit
  return (
    <MainStyled.Container>
      {user ? (
        <>
          <h1>This is the main</h1>
          <AddButton />
          <AnimatePresence exitBeforeEnter>
            {isOpen && <AddValuesModal />}
          </AnimatePresence>
        </>
      ) : (
        <NotAuthenticatedSection />
      )}
    </MainStyled.Container>
  );
};
