import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Location } from "@carbon/icons-react";
import LikeBtn from "../components/LikeBtn";

function Home() {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get("https://ironrest.herokuapp.com/Giulia-Junior-Wasthere")
      .then((response) => {
        const responseInvert = response.data.reverse();
        setState([...responseInvert]);
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
            className="col-12 col-sm-12 col-md-6 col-lg-3 mt-2"
          >
            <div
              className="card mt-3"
              style={{ width: "100%", height: "100%" }}
            >
              <img
                src={currentObj.urlImage}
                className="card-img-top"
                alt={currentObj.title}
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">{currentObj.title}</h5>
                  <p className="card-text">
                    <Location /> {currentObj.place}
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <Link
                    to={`/post/${currentObj._id}`}
                    className="btn btn-info text-white"
                  >
                    See more
                  </Link>
                  <LikeBtn id={currentObj._id} state={currentObj} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
