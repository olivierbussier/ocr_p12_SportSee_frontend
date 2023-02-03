import useFetch from "react-fetch-hook";
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
const reverseData = (array) => {
  const dataReversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    dataReversedArray.push(array[i]);
  }
  return dataReversedArray;
};

/**
 * Format XAxis ticks in french
 * @param {string} kind - english labels
 * @returns french labels
 */
const xAxisFormatter = (kind) => {
  switch (kind) {
    case 1:
      return "Cardio";
    case 2:
      return "Energie";
    case 3:
      return "Endurance";
    case 4:
      return "Force";
    case 5:
      return "Vitesse";
    case 6:
      return "Intensité";
    default:
      return null;
  }
};

const RadarPerf = ({ userId }) => {
  const { isLoading, data, error } = useFetch(
    `http://localhost:3000/user/${userId}/performance`
  );
  console.log("perfo = ", isLoading ? "loading" : data.data);

  if (error) {
    return (
      <div>
        <p>Code: ${error.status}</p>
        <p>Message: ${error.statusText}</p>
      </div>
    );
  }

  if (!isLoading) {
    const dataReversed = reverseData(data.data.data);
    return (
      <div className="radar-chart-wrap">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            data={dataReversed}
            outerRadius={80}
            margin={{
              top: -8,
              right: 8,
              left: 8,
              bottom: -4,
            }}
            height="100%"
            width="100%"
          >
            <PolarGrid radialLines={false} />
            <PolarAngleAxis
              dataKey="kind"
              tickLine={false}
              tick={{ fontSize: 12, fontWeight: 500 }}
              stroke="#FFFFFF"
              tickFormatter={xAxisFormatter}
            />
            <Radar dataKey="value" fill="#FF0101B2" />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    );
  }
};

RadarPerf.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default RadarPerf;
