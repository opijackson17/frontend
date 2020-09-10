import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';


function HostelInfoDisplay({props}){

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:80/api/allhostels').then(res => res.json())
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
        return (<Container>{
            items.map((allData) => {
                switch (props) {
                    case String(allData.id):
                        return (
                        <Row className="shadow-none p-3 mb-5 bg-light rounded"><Col sm={10} className = "d-inline text-uppercase font-weight-bold" style={{fontSize: 40}}>{allData.hname} </Col>
                        <Col sm={2} className = "d-inline text-uppercase font-weight-bold text-info text-left" style={{fontSize: 40}}>{allData.type}</Col></Row>
                        );

                    default:
                        break;
                }
            }) 
        }</Container>);
    }

}

export default HostelInfoDisplay;