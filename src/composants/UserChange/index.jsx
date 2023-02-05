import PropTypes from "prop-types";
import ReactSelect from "../ReactSelect";

import "./style.scss"

const UserChange = ({ onChange, currentUser }) => {
  const options = [
    { value: 12, label: "Karl" },
    { value: 18, label: "Cecilia" },
  ];

  return (
    <ReactSelect
      className="fixed-right"
      currentValue={currentUser}
      onChange={onChange}
      options={options}
    />
  );
};

UserChange.propTypes = {
  onChange: PropTypes.func.isRequired,
  currentUser: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired
}

export default UserChange;
