import Select from "react-select";

import PropTypes from "prop-types";

import "./style.scss";

/**
 * This component is used to display the user informations on the board
 * It displays Greetings, firstname and comment for the user
 *
 * @param {object} props
 * @param {String} props.firstName
 * @param {CallableFunction} props.parentChange
 * @returns {JSX.Element}
 */
const Header = ({ firstName, parentChange }) => {
  const options = [
    { value: 12, label: "Karl" },
    { value: 18, label: "Cecilia" },
  ];

  return (
    <div className="header">
      <div className="header-text">
        <div>Bonjour</div>
        <div className="primary-red">{firstName}</div>
      </div>
      <div className="comment-day">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </div>
      <Select
        className="fixed-right"
        onChange={parentChange}
        options={options}
      />
    </div>
  );
};

Header.propTypes = {
  firstName: PropTypes.string.isRequired,
  parentChange: PropTypes.func.isRequired,
};

export default Header;
