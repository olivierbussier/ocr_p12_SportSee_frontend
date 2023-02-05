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
const Header = ({ firstName }) => {

  return (
    <header className="header">
      <div className="header-text">
        <div>Bonjour</div>
        <div className="primary-red" data-testid="firstname-id">{firstName}</div>
      </div>
      <div className="comment-day">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </div>
    </header>
  );
};

Header.propTypes = {
  firstName: PropTypes.string.isRequired
};

export default Header;
