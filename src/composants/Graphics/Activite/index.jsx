import useFetch from "react-fetch-hook";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";

import "./style.scss";

const xAxisTickFormat = (value) => {
  const valueDay = value.split("-");

  return Number(valueDay[2]);
};

const CustomTooltip = ({ payload, active }) => {
  return active ? (
    <div className="activity-graph-tooltip">
      <div>{`${payload[0].value}`}kg</div>
      <div>{`${payload[1].value}`}Kcal</div>
    </div>
  ) : null;
};

const Activite = ({ userId }) => {
  const { isLoading, data, error } = useFetch(
    `http://localhost:3000/user/${userId}/activity`
  );
  console.log("activité = ", isLoading ? "loading" : data.data);

  return error ? (
    <div className="error-fetch">
      <p>Code: ${error.status}</p>
      <p>Message: ${error.statusText}</p>
    </div>
  ) : !isLoading ? (
    <div className="activity-graph">
      <h2 className="activity-graph-title">Activité quotidienne</h2>
      <ResponsiveContainer>
        <BarChart data={data.data.sessions}>
          <CartesianGrid
            vertical="false"
            strokeDasharray="3"
            height={1}
            horizontalPoints={[90, 185]}
          />
          <XAxis
            className="activity-x"
            dataKey="day"
            tickFormatter={xAxisTickFormat}
            interval="preserveStartEnd"
            tickSize="0"
            tickMargin="20"
            stroke="#9B9EAC"
          />
          <YAxis
            dataKey="calories"
            yAxisId="left"
            orientation="left"
            hide="true"
          />
          <YAxis
            className="activity-y"
            dataKey="kilogram"
            yAxisId="right"
            orientation="right"
            type="number"
            domain={["dataMin -1", "dataMax"]}
            tickCount="3"
            tickSize="0"
            axisLine={false}
            tickMargin="30"
            width={45}
            stroke="#9B9EAC"
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="top"
            align="right"
            height={80}
            iconType="circle"
            iconSize={8}
            formatter={(value, entry, index) => (
              <span className="activity-legend">{value}</span>
            )}
          />
          <Bar
            name="Poids (kg)"
            dataKey="kilogram"
            yAxisId="right"
            fill="#282D30"
            radius={[25, 25, 0, 0]}
            barSize={7}
          />
          <Bar
            name="Calories brûlées (kCal)"
            dataKey="calories"
            yAxisId="left"
            fill="#E60000"
            radius={[25, 25, 0, 0]}
            barSize={7}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : (
    <div className="loading">Loading</div>
  );
};

export default Activite;
