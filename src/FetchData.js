import React , {useEffect, useState} from 'react';
import {Row, Col} from 'react-bootstrap';

function FetchData(){

  const [errors, setErrors] = useState(false);
  const [data, setData] = useState([]);

    useEffect(() => {
       function fetchData(){
         fetch('http://localhost:80/api/universities').then(res => res.json())
         .then(result => setData(result))
         .catch((error) => setErrors(error));
    
            }
            fetchData();
        });

        const listitems = data.map((item) =>
          <Row className="mt-2 mb-2"><Col><span className = "pr-2"><input type="radio" value={ item.name} className="form-group" name="university" /></span>{ item.name}
           </Col></Row>        
        );

        return  errors ? JSON.stringify(errors):listitems;      
}

export default FetchData;