import React from "react";
import CardWidget from "./CardWidget/CardWidget";

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand">
            <img
              src="https://static.vecteezy.com/system/resources/previews/008/448/712/non_2x/vape-e-cigarette-logo-design-template-vape-shop-electronic-vaporizer-logo-illustration-free-vector.jpg"
              alt="Logo"
              width="180"
              height="130"
              className="d-inline-block p-3 align-text-right rounded"
            />
            VAPE SHOP
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Equipos Completos
                </span>
                <ul className="dropdown-menu">
                  <li>
                    <span className="dropdown-item">Action</span>
                  </li>
                  <li>
                    <span className="dropdown-item">Another action</span>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Liquidos
                </span>
                <ul className="dropdown-menu">
                  <li>
                    <span className="dropdown-item">Action</span>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Extras
                </span>
                <ul className="dropdown-menu">
                  <li>
                    <span className="dropdown-item">Action</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <CardWidget />
      </nav>
    </div>
  );
};

export default Navbar;
