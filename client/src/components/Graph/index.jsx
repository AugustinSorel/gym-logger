import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import * as GraphStyle from "../../styles/Graph.styled";
import theme from "../../utils/theme";
import { CustomTooltip } from "../CustomTooltip";

export const Graph = ({ graphData }) => {
  //   const domain = [(dataMin) => dataMin, () => endDate.getTime()];

  return (
    <GraphStyle.Container>
      <ResponsiveContainer>
        <LineChart data={graphData}>
          <Line
            type="monotone"
            dataKey="oneRepMax"
            stroke={theme.colors.textColor}
            dot={{ r: 0 }}
            connectNulls={true}
          />

          <XAxis
            dataKey="date"
            scale="time"
            domain={["dataMin", "dataMax"]}
            type="number"
            tick={false}
            axisLine={false}
            height={10}
          />
          <YAxis
            dataKey="oneRepMax"
            axisLine={false}
            tick={false}
            domain={["dataMin", "dataMax"]}
            width={10}
          />

          <Tooltip
            isAnimationActive={false}
            content={<CustomTooltip />}
            position={{ x: 0, y: 0 }}
            cursor={{ display: "none" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </GraphStyle.Container>
  );
};
