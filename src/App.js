import { Routes, Route } from "react-router-dom";

import { createContext, useContext, useEffect, useState } from "react";

import Container from "./composants/Container";
import Main from "./composants/Main";
import DashBoard from "./pages/DashBoard";
import Error from "./pages/Error";

import { Normalize }  from "./services/Normalize"
import { API } from "./services/API";
import { MockedAPI } from "./services/MockedAPI";

import "./App.css";

function App() {
  const [userId, setUserId] = useState(12);

  const [userData, setUserData] = useState(null);
  const [activityData, setActivityData] = useState(null);
  const [averageData, setAverageData] = useState(null);
  const [performanceData, setPerformanceData] = useState(null);

  const [error, setError] = useState(null);

  const dataMocked = true


  const api = dataMocked ? new MockedAPI() : new API('http://localhost:3000/')
  
  const normalize = new Normalize();

  // console.log("call to <App />, userId=", userId);

  useEffect(() => {
    api.fetchUserData(userId)
      .then((data) => setUserData(normalize.dataUser(data)))
      .catch((error) => setError(error));
    api.fetchActivityData(userId)
      .then((data) => setActivityData(normalize.dataActivity(data)))
      .catch((error) => setError(error));
    api.fetchAverageData(userId)
      .then((data) => setAverageData(normalize.dataDuree(data)))
      .catch((error) => setError(error));
    api.fetchPerformanceData(userId)
      .then((data) => setPerformanceData(normalize.dataPerformance(data)))
      .catch((error) => setError(error));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  return (
    <Container>
      <Main onUserChange={(id) => setUserId(id)} currentUser={userId}>
        <Routes>
          <Route
            path="/"
            element={
              error ? (
                <Error code="😵" text={error.message} />
              ) : (
                <DashBoard
                  user={userData}
                  activity={activityData}
                  average={averageData}
                  performance={performanceData}
                />
              )
            }
          />
          <Route
            path="/profil"
            element={
              <Error code="Aie" text="La page 'Profil' n'existe pas encore" />
            }
          />
          <Route
            path="/settings"
            element={
              <Error code="Aie" text="La page 'Réglages' n'existe pas encore" />
            }
          />
          <Route
            path="/social"
            element={
              <Error
                code="Aie"
                text="La page 'Communauté' n'existe pas encore"
              />
            }
          />
          <Route
            path="/relax"
            element={
              <Error
                code="Aie"
                text="La page 'Relaxation' n'existe pas encore"
              />
            }
          />
          <Route
            path="/natation"
            element={
              <Error code="Aie" text="La page 'Natation' n'existe pas encore" />
            }
          />
          <Route
            path="/velo"
            element={
              <Error code="Aie" text="La page 'Vélo' n'existe pas encore" />
            }
          />
          <Route
            path="/muscu"
            element={
              <Error
                code="Aie"
                text="La page 'Musculation' n'existe pas encore"
              />
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </Main>
    </Container>
  );
}

export default App;
