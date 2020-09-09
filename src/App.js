import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Universities from './FetchUniversity';
import Hostels from './FetchHostels';
import { Container, Row, Col } from 'react-bootstrap';

function App() {

  const[radio,setRadio]= useState();
  
    return (
    <Container>
    <Header/>
      <Row>
        <Col sm={3} className = "overflow-auto">
    <caption className = "d-inline text-uppercase font-weight-bold">Universities: {radio}</caption>
            <div onChange={(e)=>{setRadio(e.target.value)}}>
              <Row className="mt-2 mb-2">
                <Col>
                  <span className = "pr-2"><input type="radio" value="all" className="form-group" name="university" defaultChecked/></span>All
                </Col>                  
              </Row>
              <Universities/>
            </div>    
        </Col>
        <Col sm={9}>
         <caption className = "justify-content-md-center d-inline text-uppercase font-weight-bold">best hostels around Universities</caption>
          <div className = "shadow-sm p-3 mb-5 bg-white">
            <Hostels props = {radio}/>
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
