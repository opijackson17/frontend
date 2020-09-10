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
        let variable = null;
        let filteredArray;
        filteredArray = items.filter(item => String(item.universty_id) === props);
        filteredArray.map(item => variable = 
            <Row><Col sm={6}>
                <Card style={{ width: '18rem' }}>
                    <img variant="top" src="../img/logo.png" alt={item.profileImage}/>
                    <Card.Body className="mt-4 text-muted bg-secondary">
                        <Card.Link href={"/hostels/"+item.id} className="text-light font-weight-bold">
                            <Card.Title >{item.hname} Hostel</Card.Title>
                        </Card.Link>
                    </Card.Body>
                </Card>
            </Col></Row>
        )

        // items.map(item => {
        //     switch (props) {
        //         case 'all':
        //             variable = <Row><Col sm={6}>
        //                 <Card style={{ width: '18rem' }}>
        //                     <img variant="top" src="../img/logo.png" alt={item.profileImage}/>
        //                     <Card.Body className="mt-4 text-muted bg-secondary">
        //                         <Card.Link href={"/hostels/"+item.id} className="text-light font-weight-bold">
        //                             <Card.Title >{item.hname} Hostel</Card.Title>
        //                         </Card.Link>
        //                     </Card.Body>
        //                 </Card>
        //             </Col></Row>
        //             break;
        //         }
        //     }
        // )
        return variable;
    }
}
export default FetchHostels;


