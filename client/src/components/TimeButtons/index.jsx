import useExercise from "../../store/useExercise";
import * as TimeButtonsStyle from "../../styles/TimeButtons.styled";
import timeLabels from "../../utils/timeLabels";

export const TimeButtons = () => {
  const time = useExercise((state) => state.time);
  const setTime = useExercise((state) => state.setTime);

  return (
    <TimeButtonsStyle.ButtonsContainer>
      {timeLabels.map((timeLabel, index) => (
        <TimeButtonsStyle.Button
          isActive={time === timeLabel}
          key={index}
          onClick={() => setTime(timeLabel)}
        >
          {timeLabel}
        </TimeButtonsStyle.Button>
      ))}
    </TimeButtonsStyle.ButtonsContainer>
  );
};
