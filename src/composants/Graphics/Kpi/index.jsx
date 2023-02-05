import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";
import PropTypes from "prop-types";

import "./style.scss";

/**
 * React component used to display today score using radial bar chart
 * parameter value is number from 0 to 1
 *
 * @param {object} props
 * @param {number} props.value Value (between 1 and 1) of the KPI to display
 * @returns {JSX.Element} DOM of the KPI graph
 */
const Kpi = ({ value }) => {
  return (
    <div className="kpi-chart-wrap">
      <h2 className="kpi-chart-text">Score</h2>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="90%"
          data={[{ score: value }]}
          startAngle={180}
          endAngle={-180}
        >
          <RadialBar
            minAngle={15}
            dataKey="score"
            fill="#FF0000"
            cornerRadius={25}
            barSize={10}
          />
          <PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
          <circle cx="50%" cy="50%" fill="white" r="25%"></circle>
        </RadialBarChart>
      </ResponsiveContainer>
      {/* text display */}
      <div className="kpi-score">
        <div className="kpi-score-percent">{Number(value) * 100}%</div>
        <div className="kpi-score-text">
          de votre
          <br />
          objectif
        </div>
      </div>
    </div>
  );
};

Kpi.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Kpi;
