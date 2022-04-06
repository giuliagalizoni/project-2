import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Navbar";

import Home from "../pages/Home";
import Friends from "../pages/Friends";
import PostDetails from "../pages/PostDetails";
import NewPost from "../pages/NewPost";
import Error from "../pages/Error";

function App() {
  return (
    <div>
    <Navbar/>
    <div className="container">
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/friends" element={<Friends />}/>
      <Route path="/post/:id" element={<PostDetails />}/>
      <Route path="/new-post" element={<NewPost />}/>
      <Route path="*" element={<Error />}/>
    </Routes>
    </div>
    </div>
  );
}

export default App;
