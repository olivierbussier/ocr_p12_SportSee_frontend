import PropTypes from "prop-types";

import "./style.scss";

/**
 * This component is used to setup a column in the display with specified width inside
 * the Dashboard wrapper below.
 *
 * @param {object} props
 * @param {Number} props.width
 * @param {JSX.Element} props.children
 * @returns {JSX.Element}
 */
export const Column = ({ width, children }) => {
  return (
    <div className="graph-column" style={{ width: width }}>
      {children}
    </div>
  );
};

Column.propTypes = {
  children: PropTypes.object.isRequired
}

/**
 * This component is the wrapper for all the widgets displayed in the dashboard
 *
 * @param {object} props
 * @param {JSX.Element} props.children
 * @returns {JSX.Element} DOM of the dashboard wrapper
 */
export const DashBoardWrapper = ({ children }) => {
  return <div className="dashboard-wrapper">{children}</div>;
};

DashBoardWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]).isRequired
}