import React , {useEffect, useState} from 'react';
import {Row, Col} from 'react-bootstrap';

function FetchData({props}){

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);


    useEffect(() => {
         fetch('http://localhost:80/api/universities').then(res => res.json())
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
    } else {
      return (<div>{
        items.map((item) => item!=={} ? <Row className="mt-2 mb-2"><Col><span className = "pr-2"><input type="radio" value={ item.id} className="form-group" name="university"/></span>{ item.name}
       </Col></Row> : <Row className="mt-2 mb-2"><Col className = "pr-2">No University registered</Col></Row> )
       }</div>)
    }
}

export default FetchData;