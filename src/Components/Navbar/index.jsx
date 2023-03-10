import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  let url = window.location.pathname;
  console.log(url);
  return (
    <div className="ig_navbar">
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
            <li className={"nav-item " + (url == "/image-generator" ? 'nav-custom-active' : " ")}>
              <Link
                to="/image-generator"
                className="nav-link"
                aria-current="page"
                href="#"
              >
                Image Generator
              </Link>
            </li>
            <li className={"nav-item " + (url == "/codex" ? 'nav-custom-active' : " ")}>
              <Link to="/codex" className="nav-link">
                Codex
              </Link>
            </li>
            <li className={"nav-item " + (url == "/text-writer" ? 'nav-custom-active' : " ")}>
              <Link to="/text-writer" className="nav-link">
                AI Text Editer
              </Link>
            </li>
            <li className={"nav-item " + (url == "/documentation" ? 'nav-custom-active' : " ")}>
              <Link to="/documentation" className="nav-link">
                Documentation
              </Link>
            </li>
            <li className={"nav-item " + (url == "/about" ? 'nav-custom-active' : " ")}>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
