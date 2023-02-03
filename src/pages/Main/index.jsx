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
import { useState } from "react";

const Main = () => {

  const [userId, setUserId] = useState(12)

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

  const onUserChange = (x) => {
    setUserId(x.value)
    console.log(x)
  }

  if (!isLoading) {
    const userData = data.data;
    return (
      <DashBoard>
        <div className="zone-header">
          <Header data={userData} parentChange={onUserChange} />
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
          <Kpi value={userData.todayScore ? userData.todayScore : userData.score} />
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
