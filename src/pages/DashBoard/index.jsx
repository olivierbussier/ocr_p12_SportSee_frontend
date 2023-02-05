import PropTypes from "prop-types";

import Header from "../../composants/Header";
import { DashBoardWrapper } from "../../composants/DashboardWrapper";
import Activite from "../../composants/Graphics/Activite";
import Duree from "../../composants/Graphics/Duree";
import CalProGluLip from "../../composants/Graphics/CPGL";
import RadarPerf from "../../composants/Graphics/RadarPerf";
import Kpi from "../../composants/Graphics/Kpi";

import "./style.scss";
import Spinner from "../../composants/Spinner";


/**
 * This component is used to display the DashBoard with all the widgets
 *
 * @returns {JSX.Element} DOM of the dashboard
 */
const DashBoard = ({user, activity, average, performance}) => {

  return (user && activity && average && performance) ? (
    <DashBoardWrapper>
      <section className="zone-header">
        <Header
          firstName={user.userInfos.firstName}
        />
      </section>
      <section className="zone-activite">
        <Activite activity={activity} />
      </section>
      <section className="zone-duree">
        <Duree average={average} />
      </section>
      <section className="zone-radar">
        <RadarPerf performance={performance} />
      </section>
      <section className="zone-kpi">
        <Kpi
          value={user.todayScore}
        />
      </section>
      <section className="zone-cglp">
        <CalProGluLip data={user.keyData} />
      </section>
    </DashBoardWrapper>
  ) : (
    <Spinner />
  );
};

DashBoard.propTypes = {
  user: PropTypes.object,
  activity: PropTypes.object,
  average: PropTypes.object,
  performance: PropTypes.object
}
export default DashBoard;
