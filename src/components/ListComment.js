import axios from "axios";
import { useState, useEffect } from "react";
import { TrashCan } from "@carbon/icons-react";

function ListComment(props) {
  const [state, setState] = useState([]);
  const [commentId, setCommentId] = useState("");

  function handleClick(id) {
    const really = window.confirm(
      "Are you sure you want to delete this comment?"
    );
    if (really) {
      setCommentId(id);
    }
  }

  useEffect(() => {
    axios
      .get("https://ironrest.herokuapp.com/Giulia-Junior-Wasthere-comments")
      .then((response) => {
        const responseInvert = response.data.reverse();
        setState([...responseInvert]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const filterArr = [...state].filter(
    (currentComment) => currentComment.postId === props.postId
  );
  useEffect(() => {
    if (commentId) {
      axios
        .delete(
          `https://ironrest.herokuapp.com/Giulia-Junior-Wasthere-comments/${commentId}`
        )
        .then((response) => {
          setCommentId("");
          window.location.reload();
          console.log(response.data);
        })
        .catch((err) => console.error(err));
    }
  }, [commentId]);

  return (
    <div className="mx-1 px-1" style={{ width: "100%" }}>
      <ul className="list-group">
        {filterArr.map((currentObj) => (
          <li
            className="list-group-item d-flex justify-content-between p-0"
            key={currentObj._id}
          >
            <p className="p-1 m-1">{currentObj.comment}</p>
            <button
              className="btn btn-outline-danger "
              style={{ border: "none", width: "42px", height: "40px" }}
              onClick={() => handleClick(currentObj._id)}
            >
              <TrashCan />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListComment;
