import React,{useEffect, useState} from 'react';
import {Row, Col, Card} from 'react-bootstrap';

function FetchHostels({props}){

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:80/api/hostels').then(res => res.json())
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
   }, []);

   if (error) {
    return <Row className="mt-2 mb-2"><Col><span className = "pr-2">Error: {error.message}</span></Col></Row>;
    } else if (!isLoaded) {
    return <Row className="mt-2 mb-2"><Col><span className = "pr-2">Loading...</span></Col></Row>;
    } 
    else {
        const data = <Row>{
            items.map((item) => {
                switch (props) {
                    case String(item.universty_id):
                        return (
                        <Col sm={6}>
                            <Card style={{ width: '18rem' }}>
                             <img variant="top" src="../img/logo.png" alt={item.profileImage}/>
                                <Card.Body className="mt-4 text-muted bg-secondary">
                                    <Card.Link href="#" className="text-light font-weight-bold">
                                        <Card.Title >{item.hname} Hostel</Card.Title>
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        );
                    case 'all':
                        return (
                        <Col sm={6}>
                            <Card style={{ width: '18rem' }}>
                             <img variant="top" src="../img/logo.png" alt={item.profileImage}/>
                                <Card.Body className="mt-4 text-muted bg-secondary">
                                    <Card.Link href="#" className="text-light font-weight-bold">
                                        <Card.Title >{item.hname} Hostel</Card.Title>
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        );                
                    default:
                        return <Col className="pr-2">No hostel is registered in this University.</Col>
                    }
                }
            )
            }</Row>;

        return data;
    }
}
export default FetchHostels;


