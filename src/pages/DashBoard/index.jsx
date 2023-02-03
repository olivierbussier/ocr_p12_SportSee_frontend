import useFetch from "react-fetch-hook";
import Header from "../../composants/Header";

import { DashBoardWrapper } from "../../composants/DashboardWrapper";
import Activite from "../../composants/Graphics/Activite";
import Duree from "../../composants/Graphics/Duree";
import CalProGluLip from "../../composants/Graphics/CPGL";
import RadarPerf from "../../composants/Graphics/RadarPerf";
import Kpi from "../../composants/Graphics/Kpi";

import "./style.scss";
import { useState } from "react";

/**
 * This component is used to display the DashBoard with all the widgets
 *
 * @returns {JSX.Element}
 */
const DashBoard = () => {
  const [userId, setUserId] = useState(12); // Default to user number 12

  const { isLoading, data, error } = useFetch(
    "http://localhost:3000/user/" + userId
  );

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
      <DashBoardWrapper>
        <div className="zone-header">
          <Header
            firstName={userData.userInfos.firstName}
            currentUser={userId}
            parentChange={(user) => setUserId(user.value)}
          />
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
          <Kpi
            value={userData.todayScore ? userData.todayScore : userData.score}
          />
        </div>
        <div className="zone-cglp">
          <CalProGluLip data={userData.keyData} />
        </div>
      </DashBoardWrapper>
    );
  } else {
    return <div className="loading">loading</div>;
  }
};

export default DashBoard;
