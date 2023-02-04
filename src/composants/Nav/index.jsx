import PropTypes from "prop-types";

import "./style.scss";

/**
 * This omponent is used to display a menu on top menu (see below)
 * (private component not exported)
 *
 * @param {object} props
 * @param {Array} props.items Menu items to display (array of objects with link & name properties)
 * @returns {JSX.Element} DOM of the menu
 */
const Menu = ({ items }) => {
  return (
    <ul className="menu">
      {items.map((e, index) => {
        return (
          <li key={"menu-" + index}>
            <a href={e.link}>{e.name}</a>
          </li>
        );
      })}
    </ul>
  );
};

Menu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  }))
}

/**
 * This component is used to display top menu on the application
 * (private component not exported)
 *
 * @returns {JSX.Element} DOM of the top nav bar
 */
const NavTop = () => {
  return (
    <div className="nav-top">
      <img className="logo" src="../logo.svg" alt="logo" />
      <Menu
        items={[
          { name: "Accueil", link: "/" },
          { name: "Profil", link: "/profil" },
          { name: "Réglages", link: "/settings" },
          { name: "Communauté", link: "/social" },
        ]}
      />
    </div>
  );
};

/**
 * This component is used to display copyright information on the left menu
 * (private component not exported)
 *
 * @returns {JSX.Element} DOM of the copyright inormation
 */
const Copyright = () => {
  return <div className="copyright">Copiryght, SportSee 2020</div>;
};

/**
 * This component is used to display left menu on the application
 * (private component not exported)
 *
 * @returns {JSX.Element} DOM of the Left nav bar
 */
const NavLeft = () => {
  return (
    <div className="nav-left">
      <img className="picto-link" src="../gym.svg" alt="gym" />
      <img className="picto-link" src="../swim.svg" alt="gym" />
      <img className="picto-link" src="../bike.svg" alt="gym" />
      <img className="picto-link" src="../poids.svg" alt="gym" />
      <Copyright />
    </div>
  );
};

/**
 * This component is used to display navigation bars (top & left on the application
 * (private component not exported)
 *
 * @param {object} props
 * @param {JSX.Element} props.children
 * @returns {JSX.Element} DOM of App Navigation (top & left)
 */
const Nav = ({ children }) => {
  return (
    <div className="nav-bar">
      <NavTop />
      <NavLeft />
      <div className="main">{children}</div>
    </div>
  );
};

Nav.propTypes = {
  children: PropTypes.object.isRequired
}

export default Nav;
