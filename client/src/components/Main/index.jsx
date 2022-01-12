import useModal from "../../store/useModal";
import * as MainStyled from "../../styles/Main.styled";
import { AddValuesModal } from "../AddValuesModal";
import { AnimatePresence } from "framer-motion";
import useUser from "../../store/useUser";
import { Warning } from "../Warning";
import { AccountIcon } from "../AccountIcon";
import { AddValueButton } from "../AddValueButton";

export const Main = () => {
  const isOpen = useModal((state) => state.isOpen);
  const userToken = useUser((state) => state.userToken);

  if (userToken) {
    return (
      <MainStyled.Container>
        <h1>This is the main</h1>
        <AddValueButton />
        <AccountIcon />
        <AnimatePresence exitBeforeEnter>
          {isOpen && <AddValuesModal />}
        </AnimatePresence>
      </MainStyled.Container>
    );
  }

  return <Warning text={"Your session has expired"} />;
};
