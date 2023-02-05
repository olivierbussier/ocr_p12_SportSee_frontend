import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

import PropTypes from "prop-types";

import "./style.scss";

/**
 * Format array in reverse order
 * @param {array} array
 * @returns reversed array
 */
const reverseData = (parray) => {
  const dataReversedArray = [];
  for (let i = parray.length - 1; i >= 0; i--) {
    dataReversedArray.push(parray[i]);
  }
  return dataReversedArray;
};

/**
 * This component display the user's performance on a Radar graph
 * displayed items are Cardio, Energie, Endurance, Force, Vitesse and Intensité
 *
 * @param {object} props
 * @param {Number} props.userId User ref to be fetched & displayed
 * @returns {JSX.Element} DOM of the Radar graph
 */
const RadarPerf = ({ performance }) => {

  return (
    <div className="radar-chart-wrap">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          data={reverseData(performance.data)}
          // outerRadius={80}
          margin={{
            top: 0,
            right: 0,
            left: 50,
            bottom: 0,
          }}
          // height="100%"
          // width="100%"
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tickLine={false}
            tick={{ fontSize: 12, fontWeight: 500 }}
            stroke="#FFFFFF"
            tickFormatter={(kind) =>
              [
                "Cardio",
                "Energie",
                "Endurance",
                "Force",
                "Vitesse",
                "Intensité",
              ][kind - 1]
            }
          />
          <Radar dataKey="value" fill="#FF0101B2" />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

RadarPerf.propTypes = {
  performance: PropTypes.object.isRequired,
};

export default RadarPerf;
