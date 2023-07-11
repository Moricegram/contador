import { Container } from "react-bootstrap";
import "./App.css";
import "./components/Titulos";
import Titulos from "./components/Titulos";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container>
      <Titulos></Titulos>
      {/* <Titulos /> */}
    </Container>
  );
}

export default App;
