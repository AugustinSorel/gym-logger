import useModal from "../../store/useModal";
import * as MainStyled from "../../styles/Main.styled";
import { AddValuesModal } from "../AddValuesModal";
import { AnimatePresence } from "framer-motion";
import useUser from "../../store/useUser";
import { Warning } from "../Warning";
import { AccountIcon } from "../AccountIcon";
import { AddValueButton } from "../AddValueButton";
import { AccountModal } from "../AccountModal";

export const Main = () => {
  const isAddValuesModalOpen = useModal((state) => state.isAddValuesModalOpen);
  const isAccountModalOpen = useModal((state) => state.isAccountModalOpen);
  const userToken = useUser((state) => state.userToken);

  if (userToken) {
    return (
      <MainStyled.Container>
        <h1>This is the main</h1>
        <AccountIcon />
        <AddValueButton />
        <AnimatePresence exitBeforeEnter>
          {isAddValuesModalOpen && <AddValuesModal />}
          {isAccountModalOpen && <AccountModal />}
        </AnimatePresence>
      </MainStyled.Container>
    );
  }

  return <Warning text={"Your session has expired"} />;
};
