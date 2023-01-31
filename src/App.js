import Main from "./pages/Main";
import Nav from "./composants/Nav";
import Container from "./composants/Container";

import "./App.css";

function App() {
  return (
    <Container>
      <Nav>
        <Main />
      </Nav>
    </Container>
  );
}

export default App;
