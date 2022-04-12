import { useState } from "react";
import { Favorite } from "@carbon/icons-react";
import { FavoriteFilled } from "@carbon/icons-react";

function LikeBtn() {
  const [liked, setLiked] = useState(false);

  function handleClick() {
    if (!liked) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }
  return (
    <div className="btn btn-info text-white me-1" onClick={handleClick}>
      {liked ? <FavoriteFilled /> : <Favorite />}
    </div>
  );
}

export default LikeBtn;
