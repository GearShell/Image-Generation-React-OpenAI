import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg" data-bs-theme="transparent">
        <div className="container">
          <Link to="/" className="navbar-brand" href="#">
            Generify
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
                <Link to="/image-generator" className="nav-link active" aria-current="page" href="#">
                  Image Generator
                </Link>
              </li>
              <li classNameName="nav-item">
                <Link to="/codex" className="nav-link active" href="#">
                  Codex
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/text-writer" className="nav-link active" href="#">
                  AI Text Writer
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
