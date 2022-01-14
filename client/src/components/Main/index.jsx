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
import {
  Area,
  AreaChart,
  CartesianGrid,
  Label,
  Line,
  LineChart,
  Pie,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import theme from "../../utils/theme";
import { CustomTooltip } from "../CustomTooltip";
import {
  whileHoverScale,
  whileTapScale,
} from "../../framer-motion/whileVariants";
import { useState } from "react";

export const Main = () => {
  const isAddValuesModalOpen = useModal((state) => state.isAddValuesModalOpen);
  const isAccountModalOpen = useModal((state) => state.isAccountModalOpen);
  const userToken = useUser((state) => state.userToken);
  const user = useUser((state) => state.user);
  const setTime = useExercise((state) => state.setTime);
  const time = useExercise((state) => state.time);
  const [titleValue, setTitleValue] = useState("0");

  const exercise = useExercise((state) => state.exercise);

  const { data, isLoading } = useQuery(
    ["exerciseData", exercise, time],
    () => getValue({ userId: user._id, exerciseId: exercise, timeId: time }),
    {
      enabled: Boolean(user),

      onSuccess: (data) => {
        console.log(data);
      },

      onError: (error) => {
        console.log(error);
      },
    }
  );

  if (isLoading) {
    return <div style={{ flex: 1 }}>Loading...</div>;
  }

  if (!userToken) {
    return <Warning text={"Your session has expired"} />;
  }

  return (
    <MainStyled.Container>
      {data?.length > 0 ? (
        <>
          <MainStyled.GraphContainer>
            <ResponsiveContainer>
              <LineChart data={data}>
                <Line
                  type="monotone"
                  dataKey="oneRepMax"
                  stroke={theme.colors.textColor}
                  dot={{ r: 2 }}
                />

                <XAxis dataKey="date" axisLine={false} tick={false} />
                <YAxis
                  dataKey="oneRepMax"
                  axisLine={true}
                  tick={false}
                  domain={["dataMin", "dataMax"]}
                />

                <Tooltip
                  isAnimationActive={false}
                  content={<CustomTooltip />}
                  position={{ x: 0, y: 0 }}
                  cursor={{ display: "none" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </MainStyled.GraphContainer>
          <MainStyled.ButtonsContainer>
            <MainStyled.Button
              whileHover={whileHoverScale}
              whileTap={whileTapScale}
              onClick={() => {
                setTime("all");
              }}
            >
              All
            </MainStyled.Button>
            <MainStyled.Button
              whileHover={whileHoverScale}
              whileTap={whileTapScale}
              onClick={() => {
                setTime("year");
              }}
            >
              1Y
            </MainStyled.Button>
            <MainStyled.Button
              whileHover={whileHoverScale}
              whileTap={whileTapScale}
              onClick={() => setTime("6months")}
            >
              6M
            </MainStyled.Button>
            <MainStyled.Button
              whileHover={whileHoverScale}
              whileTap={whileTapScale}
              onClick={() => setTime("month")}
            >
              1M
            </MainStyled.Button>
            <MainStyled.Button
              whileHover={whileHoverScale}
              whileTap={whileTapScale}
              onClick={() => setTime("week")}
            >
              1W
            </MainStyled.Button>
          </MainStyled.ButtonsContainer>
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
