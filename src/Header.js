import React from 'react';
import { Row, Col, Jumbotron }  from 'react-bootstrap';

function Header(){

    return(
        <Jumbotron className = "pt-4 pb-4">
            <Row className = "justify-content-md-center">
                <Col>
                    <a href="/" className = "text-capitalize text-decoration-none">HOSTEL ADVISOR</a>
                    {/* <img src="../img/logo.png" className="align-top mb-2" style={{width:"25%"}}></img> */}

                </Col>
                <Col sm={6}>
                    <a href="/" className = "text-decoration-none">HOSTELS</a>
                </Col>
                <Col>
                    <a href="/about_us" className = "text-decoration-none">ABOUT US</a>
                </Col>
            </Row>
        </Jumbotron>
    );
}


export default Header;