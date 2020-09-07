import React, {  } from 'react';
import Header from './Header';
import Footer from './Footer';
import Data from './FetchData';
import { Container, Row, Col } from 'react-bootstrap';


function onChangeValue(event) {
  let value = event.target.value;
  console.log(value);

  return value;
}

function App() {

    return (
    <Container>
    <Header/>
      <Row>
        <Col sm={3} className = "overflow-auto">
          <caption className = "d-inline text-uppercase font-weight-bold">Universities</caption>
            <div onChange={onChangeValue}>
              <Row className="mt-2 mb-2">
                <Col>
                  <span className = "pr-2"><input type="radio" value="all" className="form-group" name="university" defaultChecked/></span>All
                </Col>                  
              </Row>
              <Data/>
            </div>    
        </Col>
        <Col sm={9}>
         <caption className = "justify-content-md-center d-inline text-uppercase font-weight-bold">best hostels around Universities</caption>
          <div className = "shadow-sm p-3 mb-5 bg-white">
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <Footer/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
