import { useQueryClient } from "react-query";
import useModal from "../../store/useModal";
import * as AccountButtonStyle from "../../styles/AccountButton.styled";
import { RoundedButton } from "../RoundedButton";

export const AccountButton = () => {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData("user");
  const openAccountModal = useModal((state) => state.openAccountModal);

  if (!user || !user.name) {
    return null;
  }

  return (
    <AccountButtonStyle.Container>
      <RoundedButton text={user.name[0]} onClick={openAccountModal} />
    </AccountButtonStyle.Container>
  );
};
