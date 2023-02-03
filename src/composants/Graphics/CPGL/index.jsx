import PropTypes from "prop-types";

import "./style.scss";

/**
 * This component is used to display a key value of types
 * carbohydrates, calories, lipid, protein with an icon, a value and a unit
 *
 * @param {String} icon The icon to display in front of the value
 * @param {Number} value The value to display
 * @param {String} unit The unit to display after the value
 * @param {String} textUnit The unit to display below the value
 * @returns {JSX.Element}
 */
const Indic = ({ icon, value, unit, textUnit }) => {
  return (
    <div className="indicateur">
      <img src={icon} alt={"valeur pour " + unit} />
      <div className="text">
        <div className="text-value">
          {value}
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
 * This component is the container or the 4 Indic components
 *
 * @param {object} data An object containing calories, protein, carbohydrat and lipid values
 * @returns {JSX.Element}
 */
const CalProGluLip = ({ data }) => {
  return (
    <div className="cpgl-wrapper">
      <Indic
        icon="/assets/calories.svg"
        value={data.calorieCount}
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
