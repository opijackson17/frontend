import React, {} from 'react';
import Header from './Header';
import Footer from './Footer';
import HostelInfoDisplay from './HostelInfoDisplay';
import {Container, Row, Col} from 'react-bootstrap';

function Hostel(hostelId){
        return (
    <Container>
            <Header/>
            <HostelInfoDisplay props={hostelId.match.params.id}/>
        <Row>
            <Col sm={12}>
                <Footer/>
            </Col>
        </Row>        
    </Container>
    )
}
export default Hostel;