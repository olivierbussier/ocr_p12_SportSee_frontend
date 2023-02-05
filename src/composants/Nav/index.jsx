import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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
            <Link to={e.link}>{e.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

Menu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ),
};

/**
 * This component is used to display top menu on the application
 * (private component not exported)
 *
 * @returns {JSX.Element} DOM of the top nav bar
 */
export const NavTop = () => {
  return (
    <nav className="nav-top">
      <img className="logo" src="../logo.svg" alt="logo" />
      <Menu
        items={[
          { name: "Accueil", link: "/" },
          { name: "Profil", link: "/profil" },
          { name: "Réglages", link: "/settings" },
          { name: "Communauté", link: "/social" },
        ]}
      />
    </nav>
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
export const NavLeft = () => {
  return (
    <nav className="nav-left">
      <Link to="/relax">
        <img className="picto-link" src="../gym.svg" alt="gym" />
      </Link>
      <Link to="/natation">
        <img className="picto-link" src="../swim.svg" alt="gym" />
      </Link>
      <Link to="/velo">
        <img className="picto-link" src="../bike.svg" alt="gym" />
      </Link>
      <Link to="/muscu">
        <img className="picto-link" src="../poids.svg" alt="gym" />
      </Link>
      <Copyright />
    </nav>
  );
};
