import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

// function someThing(){
//     return (<Row><Col sm={8}>{allData.description}</Col><Col sm={4}>Kikoni</Col></Row>);
// }

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
      let filteredArray, result =null;
      filteredArray= items.filter( (allData) => String(allData.id) === props) 
      filteredArray.map(item => {
        console.log(item);
        result = <Container>
                    <Row className="shadow-none p-3 mb-5 bg-light rounded">
                      <Col sm={10} className = "d-inline text-uppercase font-weight-bold" style={   {fontSize: 35}}>{item.hname} hostel
                      </Col>
                      <Col sm={2} className = "d-inline text-uppercase font-weight-bold text-info text-left" style={{fontSize: 35}}>{item.type}
                      </Col>
                    </Row>
                  </Container> 
            }
        )
          
        return result;
    }

}

export default HostelInfoDisplay;