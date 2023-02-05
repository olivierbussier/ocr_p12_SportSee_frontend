import ReactSelect from "../ReactSelect";

const UserChange = ({ onChange, currentUser }) => {
  const options = [
    { value: 12, label: "Karl" },
    { value: 18, label: "Cecilia" },
  ];

  return (
    <ReactSelect
      className="fixed-right"
      currentValue={currentUser}
      onChange={onChange}
      options={options}
    />
  );
};

export default UserChange;
