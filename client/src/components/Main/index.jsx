import useModal from "../../store/useModal";
import * as MainStyled from "../../styles/Main.styled";
import { AddValuesModal } from "../AddValuesModal";
import { AnimatePresence } from "framer-motion";
import useUser from "../../store/useUser";
import { Warning } from "../Warning";
import { AccountIcon } from "../AccountIcon";
import { AddValueButton } from "../AddValueButton";
import { AccountModal } from "../AccountModal";
import { useQuery } from "react-query";
import { getValue } from "../../api/dataApi";
import useExercise from "../../store/useExercise";
import { useEffect, useState } from "react";
import { TimeButtons } from "../TimeButtons";
import { Graph } from "../Graph";

export const Main = () => {
  const isAddValuesModalOpen = useModal((state) => state.isAddValuesModalOpen);
  const isAccountModalOpen = useModal((state) => state.isAccountModalOpen);
  const userToken = useUser((state) => state.userToken);
  const user = useUser((state) => state.user);
  const time = useExercise((state) => state.time);

  const exercise = useExercise((state) => state.exercise);

  const [graphData, setGraphData] = useState(["0"]);

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

  if (!userToken) {
    return <Warning text={"Your session has expired"} />;
  }

  if (!user) {
    return (
      <div style={{ flex: 1 }}>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <MainStyled.Container>
      {graphData.length > 0 ? (
        <>
          <Graph graphData={graphData} />
          <TimeButtons />
        </>
      ) : (
        <Warning text={"No data for this exercise"} />
      )}

      <AccountIcon />
      <AddValueButton />

      <AnimatePresence exitBeforeEnter>
        {isAddValuesModalOpen && <AddValuesModal />}
        {isAccountModalOpen && <AccountModal />}
      </AnimatePresence>
    </MainStyled.Container>
  );
};
