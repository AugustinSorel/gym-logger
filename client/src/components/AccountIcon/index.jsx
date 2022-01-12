import { useEffect } from "react";
import { useMutation } from "react-query";
import { getUserById } from "../../api/userApi";
import useModal from "../../store/useModal";
import useUser from "../../store/useUser";
import * as AccountIconStyle from "../../styles/AccountIcon.styled";
import loadCookie from "../../utils/loadCookie";
import verifyToken from "../../utils/verifyToken";
import { RoundedButton } from "../RoundedButton";

export const AccountIcon = () => {
  const user = useUser((state) => state.user);
  const setUser = useUser((state) => state.setUser);
  const setUserToken = useUser((state) => state.setUserToken);
  const openAccountModal = useModal((state) => state.openAccountModal);

  const { mutate } = useMutation(getUserById, {
    onSuccess: (user) => {
      setUser(user);
    },
    onError: (error) => {
      console.log(error);
      setUserToken(null);
    },
  });

  useEffect(() => {
    if (!user) {
      const token = loadCookie("jwt");
      const { id } = verifyToken(token);
      mutate(id);
    }
  }, [user, mutate]);

  return (
    <AccountIconStyle.Container>
      <RoundedButton text={user?.name[0]} onClick={openAccountModal} />
    </AccountIconStyle.Container>
  );
};
