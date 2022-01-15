import * as CustomTooltipStyle from "../../styles/CustomTooltip.styled";

export const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length > 0) {
    const getDate = () => {
      const date = new Date(label).toString().split(" ").slice(0, 4);
      return date[2] + " " + date[1] + " " + date[3];
    };

    return (
      <CustomTooltipStyle.Container>
        <CustomTooltipStyle.Title>
          One rep max: {payload[0].value.toFixed(0)}
        </CustomTooltipStyle.Title>
        <CustomTooltipStyle.ValueTitle>
          {getDate()}
        </CustomTooltipStyle.ValueTitle>
      </CustomTooltipStyle.Container>
    );
  }

  return null;
};
