import useModal from "../../store/useModal";
import * as MainStyled from "../../styles/Main.styled";
import { AddValuesModal } from "../AddValuesModal";
import { AnimatePresence } from "framer-motion";
import { AccountIcon } from "../AccountIcon";
import { AddValueButton } from "../AddValueButton";
import { AccountModal } from "../AccountModal";
import GraphContainer from "../GraphContainer";
import { useQuery } from "react-query";
import { getUser } from "../../api/authApi";

export const Main = () => {
  const isAddValuesModalOpen = useModal((state) => state.isAddValuesModalOpen);
  const isAccountModalOpen = useModal((state) => state.isAccountModalOpen);

  const { isError } = useQuery("user", getUser, {
    onSuccess: (user) => {
      console.log(user);
    },

    onError: (error) => {
      console.log(error);
    },
  });

  if (isError) {
    return (
      <div style={{ flex: 1 }}>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <MainStyled.Container>
      <GraphContainer />

      <AccountIcon />
      <AddValueButton />

      <AnimatePresence exitBeforeEnter>
        {isAddValuesModalOpen && <AddValuesModal />}
        {isAccountModalOpen && <AccountModal />}
      </AnimatePresence>
    </MainStyled.Container>
  );
};
