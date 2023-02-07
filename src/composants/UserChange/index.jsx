import PropTypes from "prop-types";
import { createContext, useContext } from "react";
import ReactSelect from "../ReactSelect";

import "./style.scss"


const UserChange = ({ onChange, currentUser }) => {
  const options = [
    { value: 12, label: "User 1" },
    { value: 18, label: "User 2" },
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
