import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container, Row, Col} from 'react-bootstrap';

export default function Terms(){
    return(
        <Container>
            <Header/>
            <Row>
                <Col sm={12}>
                    <p>Terms</p>
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