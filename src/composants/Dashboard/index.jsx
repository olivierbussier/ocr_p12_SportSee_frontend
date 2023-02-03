import "./style.scss";

export const Column = ({ width, children }) => {
  return (
    <div className="graph-column" style={{ width: width }}>
      {children}
    </div>
  );
};

export const DashBoard = ({ children }) => {
  return <div className="dashboard">{children}</div>;
};
