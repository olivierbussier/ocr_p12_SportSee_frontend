import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./style.scss";

/**
 * Error page used to display errors and non implemented pages
 *
 * @param {object} props
 * @param {number|string} props.code Error code to display in big police
 * @param {string} props.text  Text to display below error code
 * @returns {JSX.Element} DOM of the error page
 */
const Error = ({ code = 404, text = null }) => {
  return (
    <div className="page-error">
      <div className="error-code">{code}</div>
      <div className="error-detail">
        {text ?? "Oups! La page que vous demandez n'existe pas (encore)."}
      </div>
      <Link to="/" className="error-action">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
};

Error.propTypes = {
  code: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  text: PropTypes.string
}
export default Error;
