import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function PostDelete() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const really = window.confirm(
      "Você tem certeza que deseja deletar este post?"
    );
    if (really) {
      axios
        .delete(`https://ironrest.herokuapp.com/Giulia-Junior-Wasthere/${id}`)
        .then((response) => {
          console.log(response.data);
          navigate("/");
        })
        .catch((err) => console.error(err));
    }

    navigate(-1);
  }, [id, navigate]);

  return <p>Deletando...</p>;
}

export default PostDelete;
