import PropTypes from "prop-types";

import "./style.scss";

/**
 * This component is the main wrapper of the application. His function is to provide
 * requirements in term of display width. The only parameter is the JSX elements to
 * display inside the container
 *
 * @param {object} props
 * @param {JSX.Element} props.children
 * @returns {JSX.Element}
 */
const Container = ({ children }) => {
  return <div className="container">{children}</div>;
};

Container.propTypes = {
  children: PropTypes.object.isRequired
}

export default Container;
