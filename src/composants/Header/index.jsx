import "./style.scss";

const Header = ({ data }) => {
  return (
    <div className="header">
      <div className="header-text">
        <div>Bonjour</div>
        <div className="primary-red">{data.userInfos.firstName}</div>
      </div>
      <div className="comment-day">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </div>
    </div>
  );
};

export default Header;
