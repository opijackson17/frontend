import React from 'react';
import { Row, Col, Jumbotron }  from 'react-bootstrap';

function Footer(){

    return(
        <Jumbotron className = "pt-4 pb-4">
            <Row className = "justify-content-md-center">
                <Col>
                    <ul className = "list-unstyled">
                        <li>
                            {/* <a href="/" className = "text-capitalize text-decoration-none">HOSTEL ADVISOR</a> */}
                            <a href="/"><img src="../img/logo.png" alt = "H|A" style={{width:"30%"}}></img></a>
                        </li>
                    </ul>
                </Col>
                <Col sm={6}>
                    <ul className = "list-unstyled"> 
                        <li>
                            <a href="contact" className = "text-decoration-none">Contact</a>
                        </li>
                        <li>
                            <a href="privacy" className = "text-capitalize text-decoration-none">Privacy</a>
                        </li>
                    </ul>
                </Col>
                <Col>
                    <ul className = "list-unstyled">
                        <li>
                            <a href="about_us" className = "text-decoration-none text-sentence">About Us</a>
                        </li>
                        <li>
                            <a href = "terms" className = "text-decoration-none">Terms</a>
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col sm={12} className="align-text-bottom divider">
                    <p className = "text-center align-text-bottom">Copyright &copy; {new Date().getFullYear()} Jafec</p>
                </Col>
            </Row>
        </Jumbotron>
    );
}


export default Footer;