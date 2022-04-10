import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    <div className="container mt-3">
      <div className="row">
        {state.map((currentObj) => (
          <div
            key={currentObj._id}
            className="col-12 col-sm-12 col-md-6 col-lg-3"
          >
            <div className="card mt-3" style={{ width: "100%" }}>
              <img
                src={currentObj.urlImage}
                className="card-img-top"
                alt={currentObj.title}
              />
              <div className="card-body">
                <h5 className="card-title">{currentObj.title}</h5>
                <p className="card-text">{currentObj.place}</p>
                <Link
                  to={`/post/${currentObj._id}`}
                  className="btn btn-info text-white"
                >
                  See more
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
