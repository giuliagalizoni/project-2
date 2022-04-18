import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Wasthere
        </Link>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div
          className="navbar-nav justify-content-end"
          // collapse navbar-collapse
          id="navbarNav"
        >
          <ul className="navbar-nav d-flex">
            {/* <li className="nav-item">
              <Link className="nav-link text-light" to="/">
                Home
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link className="nav-link" to="/friends">
                Friends
              </Link>
            </li> */}
            <li className="nav-item">
              <Link
                className="btn ms-5"
                to="/new-post"
                style={{ backgroundColor: "#fff", color: "#09a4c3" }}
              >
                Post
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
