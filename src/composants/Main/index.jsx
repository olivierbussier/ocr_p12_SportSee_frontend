import PropTypes from "prop-types";

import { NavLeft, NavTop } from "../Nav";
import UserChange from "../UserChange";

import "./style.scss";

/**
 * This component is used to display navigation bars (top & left on the application
 * (private component not exported)
 * The CSS class app-grid define the grid for nav-left, nav-top & main
 *
 * @param {object} props
 * @param {JSX.Element} props.children
 * @returns {JSX.Element} DOM of App Navigation (top & left)
 */
const Main = ({ onUserChange, currentUser, children }) => {

  return (
    <div className="app-grid">
      <NavTop />
      <NavLeft />
      <UserChange onChange={onUserChange} currentUser={currentUser}/>
      <main className="main">
        {children}
      </main>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Main;
