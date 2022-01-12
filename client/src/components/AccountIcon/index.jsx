import useUser from "../../store/useUser";
import * as AccountIconStyle from "../../styles/AccountIcon.styled";
import { RoundedButton } from "../RoundedButton";

export const AccountIcon = () => {
  const user = useUser((state) => state.user);

  if (!user) {
    console.log("FETCH THE USER");
  }

  return (
    <AccountIconStyle.Container>
      <RoundedButton text={"A"} onClick={() => null} />
    </AccountIconStyle.Container>
  );
};
