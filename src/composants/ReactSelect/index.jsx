import PropTypes from "prop-types";

/**
 * Simple select used to allow choice between Karl & Cecilia
 *
 * @param {object} props
 * @param {Array} props.options
 * @param {string|number} props.currentValue
 * @param {function} props.onChange
 * @param {string?} props.className
 * @returns {JSX.Element} DOM of the select with options
 */
const ReactSelect = ({
  options,
  currentValue = null,
  onChange,
  className = "",
  name = "default"
}) => {
  return (
    <select
      value={currentValue}
      onChange={(e) => onChange(e.target.value)}
      className={className}
    >
      {options.map((option, index) => (
        <option name={option.label} key={'select_'+name+'_'+index} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};

ReactSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    })
  ).isRequired,
  currentValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  name: PropTypes.string
};

export default ReactSelect;
