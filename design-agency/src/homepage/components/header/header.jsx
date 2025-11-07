import React from "react";
import "./navbar.css";

// If you have a logo file, import it (optional). Otherwise it will just show the text brand.
// import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
      {/* Desktop / tablet layout (≥ lg) */}
      <header className="navbar-wrap d-none d-lg-block">
        <div className="container">
          <div className="row align-items-center py-3">
            {/* Logo / Brand */}
            <div className="col-lg-3 d-flex align-items-center gap-2">
              {/* {logo && <img src={logo} alt="DesignAGENCY logo" className="brand-mark" />} */}
              <a href="/" className="brand-name m-0 text-decoration-none">
                <span className="brand-primary">Design</span>
                <span className="brand-secondary">AGENCY</span>
              </a>
            </div>

            {/* Nav links */}
            <nav className="col-lg-6">
              <ul className="nav justify-content-center main-nav">
                <li className="nav-item">
                  <a href="#services" className="nav-link">
                    Services <span className="caret-down" aria-hidden="true"></span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#about" className="nav-link">About Us</a>
                </li>
                <li className="nav-item">
                  <a href="#contact" className="nav-link">Contact Us</a>
                </li>
              </ul>
            </nav>

            {/* Actions */}
            <div className="col-lg-3 d-flex justify-content-end gap-3">
              <a href="#login" className="btn btn-login">Login</a>
              <a href="#register" className="btn btn-register">Register</a>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile layout (< lg) using your exact toggle snippet */}
      <div className="d-lg-none">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="mobile-collapse p-3">
            <div className="container">
              <div className="row">
                {/* Brand row */}
                <div className="col-12 d-flex align-items-center justify-content-between mb-3">
                  <a href="/" className="brand-name m-0 text-decoration-none">
                    <span className="brand-primary">Design</span>
                    <span className="brand-secondary">AGENCY</span>
                  </a>
                </div>

                {/* Links */}
                <div className="col-12">
                  <ul className="list-unstyled mobile-nav">
                    <li><a href="#services" className="mobile-link">Services</a></li>
                    <li><a href="#about" className="mobile-link">About Us</a></li>
                    <li><a href="#contact" className="mobile-link">Contact Us</a></li>
                  </ul>
                </div>

                {/* Buttons */}
                <div className="col-12 d-flex gap-2 mt-2">
                  <a href="#login" className="btn btn-login flex-grow-1">Login</a>
                  <a href="#register" className="btn btn-register flex-grow-1">Register</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav className="navbar navbar-light mobile-navbar">
          <div className="container-fluid">
            <button
              className="navbar-toggler ms-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
