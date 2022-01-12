import useModal from "../../store/useModal";
import useUser from "../../store/useUser";
import * as AccountIconStyle from "../../styles/AccountIcon.styled";
import { RoundedButton } from "../RoundedButton";

export const AccountIcon = () => {
  const user = useUser((state) => state.user);
  const openAccountModal = useModal((state) => state.openAccountModal);

  if (!user) {
    console.log("FETCH THE USER");
  }

  return (
    <AccountIconStyle.Container>
      <RoundedButton text={"A"} onClick={openAccountModal} />
    </AccountIconStyle.Container>
  );
};
