import React from "react";
import "./style.css";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav gap-3 mx-auto">
              <a className="nav-link" href="#About">
                About
              </a>
              <a className="nav-link" href="#Projects">
                Projects
              </a>
              <a className="nav-link" href="#Contact">
                Contact
              </a>
              <a className="nav-link" href="#Resume">
                Resume
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
