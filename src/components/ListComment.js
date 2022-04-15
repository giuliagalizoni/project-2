import axios from "axios";
import { useState, useEffect } from "react";
import { TrashCan } from "@carbon/icons-react";

function ListComment(props) {
  const [state, setState] = useState([]);
  const [commentId, setCommentId] = useState("");

  function handleClick(id) {
    const really = window.confirm(
      "Você tem certeza que deseja deletar este comentário?"
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
    <div style={{ width: "100%" }}>
      <ul className="list-group">
        {filterArr.map((currentObj) => (
          <li
            className="list-group-item d-flex justify-content-between "
            key={currentObj._id}
          >
            <p>{currentObj.comment}</p>
            <button
              className="btn btn-outline-danger mx-1"
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
