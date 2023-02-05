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
 * Animate background format when moving the cursor on the chart line
 *
 * @param {event} e - event related to mouse move
 */
function onMouseMove(e) {
  const dureeWrapper = document.querySelector(".duree-chart-wrap");
  const xPercentage = e.isTooltipActive
    ? Math.floor((e.activeCoordinate.x / dureeWrapper.offsetWidth) * 100)
    : null;

  dureeWrapper.style.background = e.isTooltipActive
    ? `linear-gradient(90deg, rgba(255,0,0, 1) ${xPercentage}%, rgba(0,0,0,0.1) ${xPercentage}%, rgba(0,0,0,0.1) 100%)`
    : "transparent";
}

/**
 * This component display a Line graph with average session duration of the
 * selected user
 *
 * @param {object} props
 * @param {Number} props.userId - User reference to fetch & display
 * @returns {JSX.Element} DOM corresponding to the average duration graph
 */
const Duree = ({ average }) => {
  return (
    <div className="duree-chart-container">
      <div className="duree-chart-wrap">
        <h2 className="duree-chart-title">Durée moyenne des sessions</h2>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={average.sessions}
            margin={{
              top: 80,
              right: 8,
              left: 8,
              bottom: 40,
            }}
            onMouseMove={(e) => onMouseMove(e)}
            onMouseOut={() =>
              (document.querySelector(".duree-chart-wrap").style.background =
                "transparent")
            }
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
  );
};

Duree.propTypes = {
  average: PropTypes.object.isRequired,
};

export default Duree;
