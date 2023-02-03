import useFetch from "react-fetch-hook";
import Header from "../../composants/Header";

import { DashBoard } from "../../composants/Dashboard";
import Activite from "../../composants/Graphics/Activite";
import Duree from "../../composants/Graphics/Duree";
import CalProGluLip from "../../composants/Graphics/CPGL";
import RadarPerf from "../../composants/Graphics/RadarPerf";
import Kpi from "../../composants/Graphics/Kpi";

// import { useFetch } from "../../shared/hook";

import "./style.scss";

const Main = ({ userId = 12 }) => {
  const { isLoading, data, error } = useFetch(
    "http://localhost:3000/user/" + userId
  );
  console.log("user = ", isLoading ? "loading" : data.data);

  if (error) {
    return (
      <div>
        <p>Code: ${error.status}</p>
        <p>Message: ${error.statusText}</p>
      </div>
    );
  }

  if (!isLoading) {
    const userData = data.data;
    return (
      <DashBoard>
        <div className="zone-header">
          <Header data={userData} />
        </div>
        <div className="zone-activite">
          <Activite userId={userId} />
        </div>
        <div className="zone-duree">
          <Duree userId={userId} />
        </div>
        <div className="zone-radar">
          <RadarPerf userId={userId} />
        </div>
        <div className="zone-kpi">
          <Kpi value={data.data} />
        </div>
        <div className="zone-cglp">
          <CalProGluLip data={userData.keyData} />
        </div>
      </DashBoard>
    );
  } else {
    return <div className="loading">loading</div>;
  }
};

export default Main;
