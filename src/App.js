import { Routes, Route } from "react-router-dom";

import Container from "./composants/Container";
import Nav from "./composants/Nav";

import DashBoard from "./pages/DashBoard";
import Error from "./pages/Error";

import "./App.css";

function App() {
  return (
    <Container>
      <Nav>
        <Routes>
          <Route path='/'         element={<DashBoard />} />
          <Route path='/profil'   element={<Error code="Aie" text="La page 'Profil' n'existe pas encore" />} />
          <Route path='/settings' element={<Error code="Aie" text="La page 'Réglages' n'existe pas encore" />} />
          <Route path='/social'   element={<Error code="Aie" text="La page 'Communauté' n'existe pas encore" />} />
          <Route path='*'         element={<Error />} />
        </Routes>
      </Nav>
    </Container>
  );
}

export default App;
