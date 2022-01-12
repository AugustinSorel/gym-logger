import { ReactComponent as WarningSvg } from "../../assets/warning.svg";
import * as WarningStyle from "../../styles/Warning.styled";

export const Warning = ({ text }) => {
  return (
    <WarningStyle.Container>
      <WarningSvg />
      <WarningStyle.Title>{text}</WarningStyle.Title>
    </WarningStyle.Container>
  );
};
