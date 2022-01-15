import * as CustomTooltipStyle from "../../styles/CustomTooltip.styled";

export const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length > 0) {
    return (
      <CustomTooltipStyle.Container>
        <CustomTooltipStyle.Title>
          One rep max: {payload[0].value.toFixed(0)}
        </CustomTooltipStyle.Title>
        <CustomTooltipStyle.ValueTitle>{label}</CustomTooltipStyle.ValueTitle>
      </CustomTooltipStyle.Container>
    );
  }

  return null;
};
