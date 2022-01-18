import useModal from "../../store/useModal";
import * as MainStyled from "../../styles/Main.styled";
import { AddValuesModal } from "../AddValuesModal";
import { AnimatePresence } from "framer-motion";
import useUser from "../../store/useUser";
import { AccountIcon } from "../AccountIcon";
import { AddValueButton } from "../AddValueButton";
import { AccountModal } from "../AccountModal";
import { useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import GraphContainer from "../GraphContainer";

export const Main = () => {
  const isAddValuesModalOpen = useModal((state) => state.isAddValuesModalOpen);
  const isAccountModalOpen = useModal((state) => state.isAccountModalOpen);
  const user = useUser((state) => state.user);
  const setUser = useUser((state) => state.setUser);

  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("jwt")}`,
      },
    };

    axios
      .get("http://localhost:5000/api/auth/get-user", config)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, [setUser]);

  if (!user) {
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
