import PropTypes from "prop-types";

import "./style.scss";

/**
 * This component is used to display a key value of types
 * carbohydrates, calories, lipid, protein with an icon, a value and a unit
 * (internal component not exported)
 *
 * @param {object} props
 * @param {String} props.icon The icon to display in front of the value
 * @param {Number} props.value The value to display
 * @param {String} props.unit The unit to display after the value
 * @param {String} props.textUnit The unit to display below the value
 * @returns {JSX.Element} DOM of the Indic
 */
const Indic = ({ icon, value, unit, textUnit, format = "fr" }) => {
  return (
    <div className="indicateur">
      <img src={icon} alt={"valeur pour " + unit} />
      <div className="text">
        <div className="text-value">
          {format === "en"
            ? new Intl.NumberFormat("en-IN", {
                maximumSignificantDigits: 3,
              }).format(value)
            : value}
          {unit}
        </div>
        <div className="text-unit">{textUnit}</div>
      </div>
    </div>
  );
};

Indic.propTypes = {
  icon: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  textUnit: PropTypes.string.isRequired,
};

/**
 * This component is the container/wrapper for the 4 Indic components
 *
 * @param {object} props
 * @param {object} props.data An object containing calories, protein, carbohydrat and lipid values
 * @returns {JSX.Element}
 */
new Intl.NumberFormat("en-IN", {
  maximumSignificantDigits: 3,
}).format(1930);
const CalProGluLip = ({ data }) => {
  return (
    <div className="cpgl-wrapper">
      <Indic
        icon="/assets/calories.svg"
        value={data.calorieCount}
        format="en"
        unit="kCal"
        textUnit="Calories"
      />
      <Indic
        icon="/assets/proteines.svg"
        value={data.proteinCount}
        unit="g"
        textUnit="Protéines"
      />
      <Indic
        icon="/assets/glucides.svg"
        value={data.carbohydrateCount}
        unit="g"
        textUnit="Glucides"
      />
      <Indic
        icon="/assets/lipides.svg"
        value={data.lipidCount}
        unit="g"
        textUnit="Lipides"
      />
    </div>
  );
};

CalProGluLip.propTypes = {
  data: PropTypes.shape({
    calorieCount: PropTypes.number.isRequired,
    proteinCount: PropTypes.number.isRequired,
    carbohydrateCount: PropTypes.number.isRequired,
    lipidCount: PropTypes.number.isRequired,
  }),
};

export default CalProGluLip;
