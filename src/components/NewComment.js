import { AddComment } from "@carbon/icons-react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewComment(props) {
  const [state, setState] = useState({
    comment: "",
    postId: props.postId,
  });

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post(
        "https://ironrest.herokuapp.com/Giulia-Junior-Wasthere-comments",
        state
      )
      .then((response) => {
        window.location.reload();
        console.log(response.data);
      });
  }
  return (
    <form className="input-group mb-3" onSubmit={handleSubmit}>
      <input
        className="form-control"
        id="newcomment"
        name="comment"
        onChange={handleChange}
        value={state.comment}
        placeholder="Leave a comment"
      />
      <div className="input-group-append">
        <button type="submit" className="btn text-light btn-info">
          <AddComment />
        </button>
      </div>
    </form>
  );
}

export default NewComment;
