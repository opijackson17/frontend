import React,{useEffect, useState} from 'react';
import {Row, Col} from 'react-bootstrap';

export default function FetchHostels(props){

    const [errors, setErrors] = useState(false);
    const [data, setData] = useState([]);

    const [hostels, allHostels] = useState([]);

    useEffect(() => {
       function fetchData(){                                                                                                                                                                                                                                                                                                                                
         fetch('http://localhost:80/api/universities').then(res => res.json())
         .then(result => setData(result))
         .catch((error) => setErrors(error));
    
            }
            fetchData();
        });

    useEffect(() => {
        function getAllHostels(){
            fetch('http://localhost:1337/hostels').then(res => res.json()).then(result => allHostels(result))
            .catch((error) => setErrors(error))
        }
        getAllHostels();

    });

        var list_of_hostels = data.map((item) => {
            if (props.value == item.name) {
            return ( <Row>
                <Col sm={4}>
                    Image
                </Col>
                <Col sm={4}>
                    {item.hostel.name}
                </Col>
                <Col sm={4}>
                    {item.hostel.location}
                </Col>
            </Row>);
            }
        else if(props.value != item.name){
         return ( <h2>No Hostels currently registered under {item.name} University</h2>)
        }
        else{
            list_of_hostels = hostels.map((item) => 
            <Row className="">
            <Col sm={4}><span className = "pr-2"></span>{ item.name}</Col>
            <Col sm={4}><span className = "pr-2"></span>{ item.name}</Col>
            <Col sm={4}><span className = "pr-2"></span>{ item.name}</Col>
            </Row>        
 
            );
 console.log(item.name)
            } 


         }
    );
    return list_of_hostels;

}


