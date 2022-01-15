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
  return (
    <GraphStyle.Container>
      <ResponsiveContainer>
        <LineChart data={graphData}>
          <Line
            type="monotone"
            dataKey="oneRepMax"
            stroke={theme.colors.textColor}
            dot={{ r: 2 }}
            connectNulls={true}
          />

          <XAxis dataKey="date" axisLine={false} tick={false} height={20} />
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
