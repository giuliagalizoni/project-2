import axios from "axios";
import { useState, useEffect } from "react";

function Home() {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get("https://ironrest.herokuapp.com/Giulia-Junior-Wasthere")
      .then((response) => {
        setState([...response.data]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return <div> Home</div>;
}

export default Home;
