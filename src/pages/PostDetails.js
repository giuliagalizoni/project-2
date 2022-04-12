import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Location } from "@carbon/icons-react";
import { Edit } from "@carbon/icons-react";
import { TrashCan } from "@carbon/icons-react";
import BackBtn from "../components/BackBtn";
import Rating from "../components/Rating";

function PostDetails() {
  const [state, setState] = useState({
    title: "",
    place: "",
    rating: 0,
    description: "",
    urlImage: "",
    id: "",
  });

  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/Giulia-Junior-Wasthere/${id}`
        );
        setState({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [id, state]);

  return (
    <div className="container container-fluid d-flex flex-column align-items-center mt-3 px-0">
      <div className="container d-flex justify-content-between pe-0">
        <BackBtn />
        <div>
          <Link className="btn btn-secondary" to={`/edit-post/${id}`}>
            <Edit />
          </Link>
          <Link className="btn btn-danger ms-1" to={`/delete-post/${id}`}>
            <TrashCan />
          </Link>
        </div>
      </div>
      <div
        className="d-flex flex-column justify-content-center my-2 px-3 border bg-white"
        style={{ maxWidth: "600px" }}
      >
        <h1 className="px-2 pt-3">{state.title}</h1>
        <img className="img-fluid" src={state.urlImage} alt={state.title} />
        <div className="card-body">
          <p>
            <Location />
            <small>{state.place}</small>
          </p>
          <Rating>{state.rating}</Rating>
          {/* <p>Rating: {state.rating}</p> */}
          <p>{state.description}</p>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
