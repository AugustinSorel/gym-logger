import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getValue } from "../../api/dataApi";
import useExercise from "../../store/useExercise";
import useUser from "../../store/useUser";
import { Graph } from "../Graph";
import { TimeButtons } from "../TimeButtons";
import { Warning } from "../Warning";

const GraphContainer = () => {
  const [graphData, setGraphData] = useState(["0"]);

  const exercise = useExercise((state) => state.exercise);
  const time = useExercise((state) => state.time);
  const user = useUser((state) => state.user);

  const { data } = useQuery(
    [exercise, time],
    () => getValue({ userId: user._id, exerciseId: exercise, timeId: time }),
    {
      enabled: Boolean(user),
    }
  );

  useEffect(() => {
    if (data) {
      setGraphData(data);
    }
  }, [data]);

  if (graphData.length > 0 && graphData[0].oneRepMax !== "0") {
    return (
      <>
        <Graph graphData={graphData} />
        <TimeButtons />
      </>
    );
  }

  return <Warning text={"No data for this exercise"} />;
};

export default GraphContainer;
