import { Routes, Route } from "react-router-dom";

import { useEffect, useState } from "react";
import {
  fetchActivityData,
  fetchAverageData,
  fetchPerformanceData,
  fetchUserData,
} from "./shared/fetchData";

import Container from "./composants/Container";
import Main from "./composants/Main";
import DashBoard from "./pages/DashBoard";
import Error from "./pages/Error";

import "./App.css";

function App() {
  const [userId, setUserId] = useState(12);

  const [userData, setUserData] = useState(null);
  const [activityData, setActivityData] = useState(null);
  const [averageData, setAverageData] = useState(null);
  const [performanceData, setPerformanceData] = useState(null);

  const [error, setError] = useState(null);

  // console.log("call to <App />, userId=", userId);

  useEffect(() => {
    fetchUserData(userId)
      .then((data) => setUserData(data))
      .catch((error) => setError(error));
    fetchActivityData(userId)
      .then((data) => setActivityData(data))
      .catch((error) => setError(error));
    fetchAverageData(userId)
      .then((data) => setAverageData(data))
      .catch((error) => setError(error));
    fetchPerformanceData(userId)
      .then((data) => setPerformanceData(data))
      .catch((error) => setError(error));
    // console.log("useEffect in <App />, userId=", userId);
  }, [userId]);

  return (
    <Container>
      <Main onUserChange={
        (id) => setUserId(id)
        } currentUser={userId}>
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
