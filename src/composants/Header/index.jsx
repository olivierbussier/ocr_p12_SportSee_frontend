import ReactSelect from "../ReactSelect";

import PropTypes from "prop-types";

import "./style.scss";

/**
 * This component is used to display the user informations on the board
 * It displays Greetings, firstname and comment for the user
 *
 * @param {object} props
 * @param {String} props.firstName Firstnameof the user displayed
 * @param {CallableFunction} props.parentChange Function to call when select box value change
 * @returns {JSX.Element} DOM of the Header zone of the dashboard
 */
const Header = ({ firstName, currentUser, parentChange }) => {
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
      <ReactSelect
        className="fixed-right"
        currentValue={currentUser}
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
