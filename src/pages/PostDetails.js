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
    <div className="container">
      <Link className="btn btn-secondary ms-5" to={`/delete-post/${id}`}>
        delete
      </Link>
      <Link className="btn btn-secondary ms-5" to={`/edit-post/${id}`}>
        edit
      </Link>
      <h1>{state.title}</h1>
      <img src={state.urlImage} alt={state.title} />
      <div>
        <small>{state.place}</small>
        <p>Rating: {state.rating}</p>
        <p>{state.description}</p>
      </div>
    </div>
  );
}

export default PostDetails;
