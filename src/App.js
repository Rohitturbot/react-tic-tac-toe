import Game from "./component/Game";
import { Col, Container, Row } from "react-bootstrap";
import usePageTitle from "./hooks/usePageTitle";

const App = () => {
  usePageTitle("Tic Tac Toe - Game");
  return (
    <Container fluid className="app-container">
      <Row className="mt-4">
        <Col>
          <Game />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
