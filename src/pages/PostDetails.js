import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Location } from "@carbon/icons-react";
import { Edit } from "@carbon/icons-react";
import { TrashCan } from "@carbon/icons-react";
import BackBtn from "../components/BackBtn";
import Rating from "../components/Rating";
import LikeBtn from "../components/LikeBtn";
import NewComment from "../components/NewComment";

function PostDetails() {
  const [state, setState] = useState({
    title: "",
    place: "",
    rating: 0,
    description: "",
    urlImage: "",
    like: false,
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
  }, [id]);

  return (
    <div className="container container-fluid d-flex flex-column align-items-center mt-3 px-0">
      <div className="container d-flex justify-content-between p-0">
        <BackBtn />
        <div>
          <Link className="btn btn-secondary" to={`/edit-post/${id}`}>
            <Edit />
          </Link>
          <Link className="btn btn-danger mx-1" to={`/delete-post/${id}`}>
            <TrashCan />
          </Link>
        </div>
      </div>
      <div
        className="d-flex flex-column flex-sm-column flex-md-column flex-lg-row justify-content-center my-2 px-3 border bg-white"
        // style={{ maxWidth: "600px" }}
      >
        <img
          className="card-img-top img-fluid my-3"
          src={state.urlImage}
          alt={state.title}
          style={{ maxWidth: "500px", maxHeight: "500px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h1 className="">{state.title}</h1>
            <p>
              <Location />
              <small>{state.place}</small>
            </p>
            <Rating>{state.rating}</Rating>
            {/* <p>Rating: {state.rating}</p> */}
            <p>{state.description}</p>
          </div>
          <div className="align-self-end">
            <LikeBtn id={id} state={state} />
          </div>
        </div>
      </div>
      <NewComment postId={id} />
    </div>
  );
}

export default PostDetails;
