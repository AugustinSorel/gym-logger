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
  const openAccountModal = useModal((state) => state.openAccountModal);

  const { mutate } = useMutation(getUserById, {
    onSuccess: (user) => {
      setUser(user);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  if (!user) {
    const token = loadCookie("jwt");
    const { id } = verifyToken(token);
    mutate(id);
  }

  return (
    <AccountIconStyle.Container>
      <RoundedButton text={user?.name[0]} onClick={openAccountModal} />
    </AccountIconStyle.Container>
  );
};
