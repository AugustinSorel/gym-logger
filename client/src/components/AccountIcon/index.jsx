import { useQueryClient } from "react-query";
import useModal from "../../store/useModal";
import * as AccountIconStyle from "../../styles/AccountIcon.styled";
import { RoundedButton } from "../RoundedButton";

export const AccountIcon = () => {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData("user");
  const openAccountModal = useModal((state) => state.openAccountModal);

  if (!user) {
    return null;
  }

  return (
    <AccountIconStyle.Container>
      <RoundedButton text={user.name[0]} onClick={openAccountModal} />
    </AccountIconStyle.Container>
  );
};
