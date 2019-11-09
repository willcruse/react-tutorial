import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopBar from './TopBar'
import Party from './Party';
import cand1 from "./images/cand1.png"
import cand2 from "./images/cand2.png"
import cand3 from "./images/cand3.png"
import { Container, Row, Col } from 'react-bootstrap';


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <TopBar />
        <Container fluid>
          <Row>
            <Col><Party pic={cand1} name="Kitty" style={styles.party}></Party></Col>
            <Col><Party pic={cand2} name="Pussy" style={styles.party}></Party></Col>
            <Col><Party pic={cand3} name="Keith" style={styles.party}></Party></Col>
          </Row>
        </Container>
      </div>
    )
  }
}

const styles = {
  party: {
    margin: '50px',
    maxWidth: '400px'
  }
}

export default App;
//style={{ flex: 1, flexDirection: 'row'}}
// style={{ display: 'inline-flex', flexDirection: 'row' }
