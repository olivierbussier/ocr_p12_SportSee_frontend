import "./style.scss";

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

const NavLeft = () => {
  return <div className="nav-left">
    <img className="picto-link" src="../gym.svg" alt="gym"/>
    <img className="picto-link" src="../swim.svg" alt="gym"/>
    <img className="picto-link" src="../bike.svg" alt="gym"/>
    <img className="picto-link" src="../poids.svg" alt="gym"/>
    <Copyright/>
  </div>;
};

const Copyright = () => {
    return <div className="copyright">Copiryght, SportSee 2020</div>
}

const Nav = ({ children }) => {
  return (
    <div className="nav-bar">
      <NavTop />
      <NavLeft />
      {children}
    </div>
  );
};

export default Nav;
