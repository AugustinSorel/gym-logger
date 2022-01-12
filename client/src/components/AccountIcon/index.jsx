import useUser from "../../store/useUser";
import * as AccountIconStyle from "../../styles/AccountIcon.styled";

export const AccountIcon = () => {
  const user = useUser((state) => state.user);

  // if (!user) return null;

  return <AccountIconStyle.Container></AccountIconStyle.Container>;
};
