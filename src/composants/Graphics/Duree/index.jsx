import useFetch from "react-fetch-hook";
import {
  CartesianGrid,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

import "./style.scss";

/**
 * Format Tooltip (private component not exported)
 *
 * @param {object} props
 * @param {array} props.payload - source data
 * @param {boolean} props.active - is Tootip active ?
 * @returns {JSX.Element?}
 */
const DureeToolTip = ({ active, payload }) => {
  return active && payload && payload.length ? (
    <div className="duree-chart-tooltip">
      <div>{`${payload[0].value}`}min</div>
    </div>
  ) : null;
};

DureeToolTip.propTypes = {
  payload: PropTypes.array,
  active: PropTypes.bool,
};

/**
 * This component display a Line graph with average session duration of the
 * selected user
 *
 * @param {object} props
 * @param {Number} props.userId - User reference to fetch & display
 * @returns {JSX.Element} DOM corresponding to the average duration graph
 */
const Duree = ({ userId }) => {

  const { isLoading, data, error } = useFetch(
    `http://localhost:3000/user/${userId}/average-sessions`
  );

  return error ? (
    <div className="error-fetch">
      <p>Code: ${error.status}</p>
      <p>Message: ${error.statusText}</p>
    </div>
  ) : !isLoading ? (
    <div className="duree-chart-container">
      <div className="duree-chart-wrap">
        <h2 className="duree-chart-title">Durée moyenne des sessions</h2>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data.data.sessions}
            margin={{
              top: 80,
              right: 8,
              left: 8,
              bottom: 40,
            }}
          >
            <CartesianGrid horizontal={false} vertical={false} />
            <XAxis
              dataKey="day"
              type="category"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fontWeight: 500 }}
              tickFormatter={(day) =>
                ["L", "M", "M", "J", "V", "S", "D"][day - 1]
              }
              stroke="rgba(255, 255, 255, 0.5)"
              tickMargin={40}
            />
            <YAxis hide="true" domain={["dataMin", "dataMax"]} />
            <Tooltip content={<DureeToolTip />} cursor={false} offset={20} />
            <Line
              dataKey="sessionLength"
              type="natural"
              stroke="#FFFFFF"
              dot={false}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  ) : (
    <div>Loading</div>
  );
};

Duree.propTypes = {
  userId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default Duree;
