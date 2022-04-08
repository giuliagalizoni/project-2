import { useState } from "react";
import FormControl from "../forms/FormControl";

function NewPost() {
  const [state, setState] = useState({
    title: "",
    place: "",
    rating: 0,
    description: "",
    urlImage: "",
    id: "",
  });
  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  console.log(state);
  return (
    <div>
      <h1>Novo Post</h1>
      <form onSubmit={handleSubmit}>
        <FormControl
          label="Title"
          id="newposttitle"
          name="title"
          onChange={handleChange}
          value={state.title}
        />

        <FormControl
          label="Place"
          id="newpostplace"
          name="place"
          onChange={handleChange}
          value={state.place}
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
        />

        <FormControl
          label="Description"
          id="newpostdescription"
          name="description"
          onChange={handleChange}
          value={state.description}
        />

        <div className="mt-3">
          <button type="submit" className="btn btn-primary">
            Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewPost;
