import * as CustomTooltipStyle from "../../styles/CustomTooltip.styled";

export const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <CustomTooltipStyle.Container>
        <CustomTooltipStyle.Title> Date: {label}</CustomTooltipStyle.Title>
        <CustomTooltipStyle.ValueTitle>
          One rep max: {payload[0].value.toFixed(0)}
        </CustomTooltipStyle.ValueTitle>
      </CustomTooltipStyle.Container>
    );
  }

  return null;
};
