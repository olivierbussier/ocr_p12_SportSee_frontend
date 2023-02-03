import "./style.scss";

const Indic = ({ icon, value, unit, textUnit }) => {
  return (
    <div className="indicateur">
      <img src={icon} alt={"valeur pour " + unit} />
      <div className="text">
        <div className="text-value">
          {value}
          {unit}
        </div>
        <div className="text-unit">{textUnit}</div>
      </div>
    </div>
  );
};

const CalProGluLip = ({ data }) => {
  return (
    <div className="cpgl-wrapper">
      <Indic
        icon="/assets/calories.svg"
        value={data.calorieCount}
        unit="kCal"
        textUnit="Calories"
      />
      <Indic
        icon="/assets/proteines.svg"
        value={data.proteinCount}
        unit="g"
        textUnit="Protéines"
      />
      <Indic
        icon="/assets/glucides.svg"
        value={data.carbohydrateCount}
        unit="g"
        textUnit="Glucides"
      />
      <Indic
        icon="/assets/lipides.svg"
        value={data.lipidCount}
        unit="g"
        textUnit="Lipides"
      />
    </div>
  );
};

export default CalProGluLip;
