import React from "react";
import PropTypes from "prop-types";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/todo">
                  Todo
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <form className="d-flex ml-auto">
              <button className="btn btn-light login" type="submit">
                <i className="fa fa-sign-in-alt"></i>&nbsp; Login
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

Header.defaultProps = {
  title: "Your Title Here",
};

Header.prototype = {
  title: PropTypes.string,
};
