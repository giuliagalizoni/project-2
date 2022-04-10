import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

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
    <div className="container mt-3 d-flex flex-column justify-content-center">
      <div className="inline">
        <Link className="btn btn-secondary ms-5" to={`/delete-post/${id}`}>
          delete
        </Link>
        <Link className="btn btn-secondary ms-5" to={`/edit-post/${id}`}>
          edit
        </Link>
      </div>
      <div
        className="d-flex flex-column justify-content-center mt-2"
        style={{ maxWidth: "500px" }}
      >
        <h1>{state.title}</h1>
        <img className="img-fluid" src={state.urlImage} alt={state.title} />
        <div>
          <small>{state.place}</small>
          <p>Rating: {state.rating}</p>
          <p>{state.description}</p>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
