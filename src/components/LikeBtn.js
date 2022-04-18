import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { Favorite } from "@carbon/icons-react";
import { FavoriteFilled } from "@carbon/icons-react";

function LikeBtn(props) {
  const [liked, setLiked] = useState(false);
  // Setar esse state inicial estava fazendo com que o useEffect que escuta 'clicked' executasse mesmo que o usuário não tivesse clicado no botão
  const [clicked, setClicked] = useState(false);
  // variável pra saber se o componente está renderizando pela primeira vez ou não
  const didMount = useRef(false);

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
        setLiked(clicked);
      } catch (err) {
        console.error(err);
      }
    }

    // Só rodamos a função para atualizar a API se o componente já renderizou pelo menos mais de uma vez
    if (didMount.current) {
      fetchPost();
    }

    // Assim que o componente renderiza pela primeira vez atualizamos pra true
    if (!didMount.current) {
      didMount.current = true;
    }
  }, [clicked]);

  useEffect(() => {
    setLiked(props.state.like);
  }, [props.state.like]);

  return (
    <div className="btn btn-info text-white" onClick={handleClick}>
      {liked ? <FavoriteFilled /> : <Favorite />}
    </div>
  );
}

export default LikeBtn;

// =============================================================================================
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { Favorite } from "@carbon/icons-react";
// import { FavoriteFilled } from "@carbon/icons-react";

// function LikeBtn(props) {
//   const [liked, setLiked] = useState(false);
//   const [clicked, setClicked] = useState(false);
//   function handleClick() {
//     if (!clicked) {
//       setClicked(true);
//     } else {
//       setClicked(false);
//     }
//   }
//   useEffect(() => {
//     async function fetchPost() {
//       try {
//         const clone = { ...props.state };
//         delete clone._id;
//         const response = await axios.put(
//           `https://ironrest.herokuapp.com/Giulia-Junior-Wasthere/${props.id}`,
//           { ...clone, like: clicked }
//         );
//         console.log(response.data)
//         setLiked(clicked);
//       } catch (err) {
//         console.error(err);
//       }
//     }
//     fetchPost();
//   }, [clicked]);

//   useEffect(() => {
//     setLiked(props.state.like);
//   }, [props.state.like]);

//   return (
//     <div className="btn btn-info text-white me-1" onClick={handleClick}>
//       {liked ? <FavoriteFilled /> : <Favorite />}
//     </div>
//   );
// }

// export default LikeBtn;
