import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg" data-bs-theme="transparent">
        <Link to="/" className="navbar-brand">
          Build Developers
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-md-auto">
            <li className="nav-item">
              <Link
                to="/image-generator"
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                Image Generator
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/codex" className="nav-link active">
                Codex
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/text-writer" className="nav-link active">
                AI Text Editer
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link active">
                Documentation
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link active">
                About
              </Link>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-outline-dark">
                Login
              </button>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-dark">
                Register as a Developer
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
