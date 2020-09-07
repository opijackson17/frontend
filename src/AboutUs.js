import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {Container, Row, Col} from 'react-bootstrap';


function AboutUs(){
    return(
        <Container>
            <Header/>
            <Row>
                <Col sm={12}>
                    <p>About Us</p>
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

export default AboutUs;
