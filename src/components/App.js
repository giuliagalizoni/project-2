import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Navbar";

import Home from "../pages/Home";
import Friends from "../pages/Friends";
import PostDetails from "../pages/PostDetails";
import NewPost from "../pages/NewPost";
import Error from "../pages/Error";
import PostDelete from "../pages/PostDelete";
import EditPost from "../pages/EditPost";

function App() {
  return (
    <div className=" bg-light mt-0">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/post/:id" element={<PostDetails />} />
          <Route path="/new-post" element={<NewPost />} />
          <Route path="*" element={<Error />} />
          <Route path="/delete-post/:id" element={<PostDelete />} />
          <Route path="/edit-post/:id" element={<EditPost />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
