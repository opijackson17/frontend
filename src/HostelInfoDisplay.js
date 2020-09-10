import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

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
   }, []);

   if (error) {
    return <Row className="mt-2 mb-2"><Col><span className = "pr-2">Error: {error.message}</span></Col></Row>;
    } else if (!isLoaded) {
    return <Row className="mt-2 mb-2"><Col><span className = "pr-2">Loading...</span></Col></Row>;
    } 
    else {
      let result =null;
        result = <Container>
                    <Row className="shadow-none p-3 mb-5 bg-light rounded">
                      <Col sm={10} className = "d-inline text-uppercase font-weight-bold" style={   {fontSize: 35}}>{items.hname} hostel
                      </Col>
                      <Col sm={2} className = "d-inline text-uppercase font-weight-bold text-info text-left" style={{fontSize: 35}}>{items.type}
                      </Col>
                    </Row>
                    <Row><Col sm={8}>{items.description}</Col><Col sm={4}>Kikoni</Col></Row>                  
                    </Container>

          
        return result;
    }

}

export default HostelInfoDisplay;