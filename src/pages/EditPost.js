import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormControl from "../forms/FormControl";
import BackBtn from "../components/BackBtn";
import TextAreaControl from "../forms/TextAreaControl";

function EditPost() {
  const [state, setState] = useState({
    title: "",
    place: "",
    rating: 0,
    description: "",
    urlImage: "",
    like: false,
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/Giulia-Junior-Wasthere/${id}`
        );

        setState({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchPost();
  }, [id]);

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const data = { ...state };
    delete data._id;
    axios
      .put(`https://ironrest.herokuapp.com/Giulia-Junior-Wasthere/${id}`, data)
      .then((response) => {
        navigate(-1);
      });
  }
  return (
    <div className="contanier mx-lg-5 mx-md-3 mx-sm-1 px-3 py-3">
      <BackBtn />
      <div className="container my-4 py-3 px-3 border rounded bg-white">
        <h1 className="display-4">Edit Post</h1>
        <form className="mt-3" onSubmit={handleSubmit}>
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

          <TextAreaControl
            label="Description"
            id="newpostdescription"
            name="description"
            onChange={handleChange}
            value={state.description}
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

export default EditPost;
