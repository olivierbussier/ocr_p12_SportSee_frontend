import Select from 'react-select';

import "./style.scss";

const Header = ({ data, parentChange}) => {
  const options = [
    {value: 12, label: 'Karl'},
    {value: 18, label: 'Cecilia'}
  ]

  return (
    <div className="header">
      <div className="header-text">
        <div>Bonjour</div>
        <div className="primary-red">{data.userInfos.firstName}</div>
      </div>
      <div className="comment-day">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </div>
      <Select className='fixed-right' onChange={parentChange} options={options}/>
    </div>
  );
};

export default Header;
