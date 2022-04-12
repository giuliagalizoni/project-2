import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormControl from "../forms/FormControl";
import BackBtn from "../components/BackBtn";

function NewPost() {
  const [state, setState] = useState({
    title: "",
    place: "",
    rating: 0,
    description: "",
    urlImage: "",
  });
  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post("https://ironrest.herokuapp.com/Giulia-Junior-Wasthere/", state)
      .then((response) => {
        console.log(response.data);
        navigate("/");
      });
  }
  return (
    <div className="contanier mx-lg-5 mx-md-3 mx-sm-1 px-3 py-3">
      <BackBtn />
      <div className="container my-4 py-3 px-3 border rounded bg-white">
        <h1 className="display-4">Create a new post</h1>
        <p>Where have you been? Share your thoughts with the world! </p>
        <form className="mt-3" onSubmit={handleSubmit}>
          <FormControl
            label="Title"
            id="newposttitle"
            name="title"
            onChange={handleChange}
            value={state.title}
            placeholder="Amazing day at Winterfell!"
          />

          <FormControl
            label="Place"
            id="newpostplace"
            name="place"
            onChange={handleChange}
            value={state.place}
            placeholder="Westeros"
          />

          <FormControl
            label="Rating"
            id="bookCreateYear"
            type="range"
            min="0"
            max="5"
            name="rating"
            onChange={handleChange}
            value={state.rating}
          />

          <FormControl
            label="Image"
            id="newpostimage"
            name="urlImage"
            onChange={handleChange}
            value={state.urlImage}
            placeholder="mypictureurl.com.br/my-pic"
          />

          <FormControl
            label="Description"
            id="newpostdescription"
            name="description"
            onChange={handleChange}
            value={state.description}
            placeholder="I've been in Winterfell and it was..."
          />

          <div className="mt-3 d-flex justify-content-end">
            <div
              className="btn text-light btn-secondary me-1"
              onClick={() => navigate(-1)}
            >
              Cancel
            </div>
            <button type="submit" className="btn text-light btn-info">
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewPost;
