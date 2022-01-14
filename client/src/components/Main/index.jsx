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

export const Main = () => {
  const isAddValuesModalOpen = useModal((state) => state.isAddValuesModalOpen);
  const isAccountModalOpen = useModal((state) => state.isAccountModalOpen);
  const userToken = useUser((state) => state.userToken);
  const user = useUser((state) => state.user);

  const exercise = useExercise((state) => state.exercise);

  const { data, isLoading } = useQuery(
    ["exerciseData", exercise],
    () => getValue({ userId: user._id, exerciseId: exercise }),
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
    return <div>Loading...</div>;
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
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="0%"
                      stopColor={theme.colors.textColor}
                      stopOpacity={0.4}
                    />
                    <stop
                      offset="75%"
                      stopColor={theme.colors.textColor}
                      stopOpacity={0.05}
                    />
                  </linearGradient>
                </defs>

                <Area
                  dataKey="oneRepMax"
                  stroke={theme.colors.textColor}
                  fill="url(#color)"
                />

                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  // tickFormatter={(str) => {}}
                />

                <YAxis
                  dataKey={"oneRepMax"}
                  axisLine={false}
                  tickLine={false}
                  tickCount={10}
                  // tickFormatter={(number) => `${number} kg`}
                />

                {/* <Tooltip
                  content={<CustomTooltip />}
                  position={{ x: 0, y: -100 }}
                  active={false}
                /> */}

                <CartesianGrid opacity={0.1} vertical={false} />
              </AreaChart>
            </ResponsiveContainer>
          </MainStyled.GraphContainer>
          <MainStyled.ButtonsContainer>
            <MainStyled.Button
              whileHover={whileHoverScale}
              whileTap={whileTapScale}
            >
              All
            </MainStyled.Button>
            <MainStyled.Button
              whileHover={whileHoverScale}
              whileTap={whileTapScale}
            >
              1Y
            </MainStyled.Button>
            <MainStyled.Button
              whileHover={whileHoverScale}
              whileTap={whileTapScale}
            >
              6M
            </MainStyled.Button>
            <MainStyled.Button
              whileHover={whileHoverScale}
              whileTap={whileTapScale}
            >
              1M
            </MainStyled.Button>
            <MainStyled.Button
              whileHover={whileHoverScale}
              whileTap={whileTapScale}
            >
              1W
            </MainStyled.Button>
          </MainStyled.ButtonsContainer>
        </>
      ) : (
        <h1>No Data</h1>
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
