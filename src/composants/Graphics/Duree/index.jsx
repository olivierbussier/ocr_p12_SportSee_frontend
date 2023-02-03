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
 * Format XAxis ticks
 * @param {Number} day - day of the week
 * @returns corresponding letter of the day
 */
const xAxisFormatter = (day) => {
  switch (day) {
    case 1:
      return "L";
    case 2:
      return "M";
    case 3:
      return "M";
    case 4:
      return "J";
    case 5:
      return "V";
    case 6:
      return "S";
    case 7:
      return "D";
    default:
      return "";
  }
};

/**
 * Format Tooltip
 * @param {array} payload - source data
 * @param {boolean} active - is Tootip active
 * @returns the value when a dot on the line is pointed
 */
const DureeToolTip = ({ active, payload, label }) => {
  // if (active && payload && payload.length) {
    return (
      <div className="duree-chart-tooltip">
        {active ? <div>{`${payload[0].value}`}min</div> : <div>rien</div>}
      </div>
    );
  // }
  // return null;
};

// /**
//  * Animate background format when moving the cursor on the chart line
//  * @param {event} e - move of the mouse
//  * @returns darker background from the pointed dot
//  */
// const mouseMove = (e) => {
//   const wrapper = document.querySelector(".duree-chart-wrap");
//   const mouseXpercent = Math.floor((e.activeCoordinate.x / wrapper.offsetWidth) * 100);

//   if (e.isTooltipActive) {

//     wrapper.style.background = `linear-gradient(90deg, rgba(255,0,0, 1) ${mouseXpercent}%, rgba(0,0,0,0.1) ${mouseXpercent}%, rgba(0,0,0,0.1) 100%)`;
//   } else {
//     wrapper.style.background = "transparent";
//   }
// }

/**
 * Animate background format when moving the cursor out of a line dot
 * @param {event} e - move of the mouse
 * @returns initial background
 */
const Duree = ({ userId }) => {

  const { isLoading, data, error } = useFetch(
    `http://localhost:3000/user/${userId}/average-sessions`
  );

  if (error) {
    return (
      <div className="error-fetch">
        <p>Code: ${error.status}</p>
        <p>Message: ${error.statusText}</p>
      </div>
    );
  }

  if (!isLoading) {
    return (
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
              // onMouseMove={(e) => mouseMove(e)}
              // onMouseOut={() => document.querySelector(".duree-chart-wrap").style.background = "transparent"}
            >
              <CartesianGrid horizontal={false} vertical={false} />
              <XAxis
                dataKey="day"
                type="category"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fontWeight: 500 }}
                tickFormatter={xAxisFormatter}
                stroke="rgba(255, 255, 255, 0.5)"
                tickMargin={40}
              />
              <YAxis hide="true" domain={["dataMin", "dataMax"]} />
              <Tooltip
                content={<DureeToolTip />}
                cursor={false}
                offset={20}
              />
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
  }
};

Duree.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default Duree;
