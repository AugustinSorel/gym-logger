import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { getValue } from "../../api/dataApi";
import useExercise from "../../store/useExercise";
import { Graph } from "../Graph";
import { TimeButtons } from "../TimeButtons";
import { Warning } from "../Warning";

const GraphContainer = () => {
  const [graphData, setGraphData] = useState(["0"]);

  const exercise = useExercise((state) => state.exercise);
  const time = useExercise((state) => state.time);

  const queryClient = useQueryClient();
  const user = queryClient.getQueryData("user");

  const { data, isError } = useQuery(
    [exercise, time, user._id],
    () => getValue({ userId: user._id, exerciseId: exercise, timeId: time }),
    {
      onError: (error) => {
        console.log("ERROR in GraphContainer: ", error);
      },
    }
  );

  useEffect(() => {
    if (data) {
      setGraphData(data);
    }
  }, [data]);

  if (!isError && graphData.length > 0 && graphData[0].oneRepMax !== "0") {
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
