import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function HostelInfoDisplay({props}){

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:80/api/ahostel/'+props).then(res => res.json())
        .then(
         (result) => {
          setIsLoaded(true);
          setItems(result);
        },
         (error) => {
           setIsLoaded(true);
           setError(error);
       }
     )
   },[]);
   if (error) {
    return <Row className="mt-2 mb-2"><Col><span className = "pr-2">Error: {error.message}</span></Col></Row>;
    } else if (!isLoaded) {
    return <Row className="mt-2 mb-2"><Col><span className = "pr-2">Loading...</span></Col></Row>;
    } 
    else {
      let result =null;
        result = <Container>
                    <Row className="shadow-sm p-2 mb-2 bg-light rounded">
                      <Col sm={10} className = "d-inline text-uppercase font-weight-bold" style={   {fontSize: 35}}>{items.hname} hostel
                      </Col>
                      <Col sm={2} className = "d-inline text-uppercase font-weight-bold text-info text-left" style={{fontSize: 35}}>{items.type}
                      </Col>
                    </Row>
                    <Row className="bg-light">
                      <Col className="border border-light">
                      <Carousel>
                        <Carousel.Item>
                          <img
                            className="d-block w-25"
                            src="../img/logo.png"
                            alt="First slide"
                          />
                          <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-25"
                            src="../img/logo.png"
                            alt="Third slide"
                          />

                          <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-25"
                            src="../img/logo.png"
                            alt="Third slide"
                          />
                          <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                      </Carousel>
                      </Col>
                    </Row>
                    <Row className="pt-4 pb-4"><Col sm={8}> <span dangerouslySetInnerHTML={{__html:items.description}}></span></Col><Col sm={4}>{items.location}</Col></Row>
                    <Row>
                      <Col sm={6} className="border border-secondary">
                        <h4 className="text-uppercase text-muted font-weight-bold">Rooms and Fare</h4>
                      </Col>
                      <Col sm={6} className="border border-secondary">
                        <h4 className="text-uppercase text-muted font-weight-bold">Services</h4>
                        <span dangerouslySetInnerHTML={{__html:items.service}}></span>                        
                      </Col>
                      </Row>
                      <Row className="font-weight-bold shadow-none p-3 mb-5 bg-info text-center" style={{fontSize: 20}}><Col sm={6} className="border border-primary bg-light">{items.mobile}</Col><Col sm={6} className="border border-primary bg-light">{items.email}</Col></Row>                 
                    </Container>

          
        return result;
    }

}

export default HostelInfoDisplay;