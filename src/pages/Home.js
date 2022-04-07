import axios from "axios";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

function Home() {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get("https://ironrest.herokuapp.com/Giulia-Junior-Wasthere")
      .then((response) => {
        setState([...response.data]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
  <div className="container mt-5">
    <div className="row">
      <div className="col">
        {state.map((currentObj) => <div className="card" style={{width: "22rem"}}>
          <img src={currentObj["url image"]} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{currentObj.title}</h5>
            <p className="card-text">{currentObj.place}</p>
            <Link to="#" className="btn btn-primary">See more</Link>
          </div>
        </div>)}
      </div>
    </div>
  
  </div>)
}

export default Home;
