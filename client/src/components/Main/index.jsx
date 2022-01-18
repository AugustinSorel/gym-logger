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
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

export const Main = () => {
  const isAddValuesModalOpen = useModal((state) => state.isAddValuesModalOpen);
  const isAccountModalOpen = useModal((state) => state.isAccountModalOpen);

  const { isLoading, isError } = useQuery("user", getUser, {
    onError: (error) => {
      console.log("ERROR in Main:", error);
    },
  });

  if (isError) {
    Cookies.remove("jwt");
    return <Navigate to={"/welcome"} />;
  }

  if (isLoading) {
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
