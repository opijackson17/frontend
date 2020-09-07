import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container, Row, Col} from 'react-bootstrap';


export default function Contacts(){
    return(
        <Container>
            <Header/>
            <Row>
                <Col sm={12}>
                    <p>Contacts</p>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <Footer/>
                </Col>
            </Row>
        </Container>
    )
}