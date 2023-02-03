import DashBoard from "./pages/DashBoard";
import Nav from "./composants/Nav";
import Container from "./composants/Container";

import "./App.css";

function App() {
  return (
    <Container>
      <Nav>
        <DashBoard />
      </Nav>
    </Container>
  );
}

export default App;
