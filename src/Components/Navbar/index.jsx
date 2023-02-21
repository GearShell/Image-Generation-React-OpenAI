import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg" data-bs-theme="transparent">
        <div className="container">
          <a className="navbar-brand" href="#">
            Generify
          </a>
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
                <a className="nav-link active" aria-current="page" href="#">
                  Image Generator
                </a>
              </li>
              <li classNameName="nav-item">
                <a className="nav-link active" href="#">
                  Codex
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  AI Text Writer
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
