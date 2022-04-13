import axios from "axios";
import { useState, useEffect } from "react";
import { Favorite } from "@carbon/icons-react";
import { FavoriteFilled } from "@carbon/icons-react";

function LikeBtn(props) {
  const [liked, setLiked] = useState(false);
  const [clicked, setClicked] = useState(false);
  function handleClick() {
    if (!clicked) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  }
  useEffect(() => {
    async function fetchPost() {
      try {
        const clone = { ...props.state };
        delete clone._id;
        const response = await axios.put(
          `https://ironrest.herokuapp.com/Giulia-Junior-Wasthere/${props.id}`,
          { ...clone, like: clicked }
        );
        console.log(response.data)
        setLiked(clicked);
      } catch (err) {
        console.error(err);
      }
    }
    fetchPost();
  }, [clicked]);

  useEffect(() => {
    setLiked(props.state.like);
  }, [props.state.like]);

  return (
    <div className="btn btn-info text-white me-1" onClick={handleClick}>
      {liked ? <FavoriteFilled /> : <Favorite />}
    </div>
  );
}

export default LikeBtn;
