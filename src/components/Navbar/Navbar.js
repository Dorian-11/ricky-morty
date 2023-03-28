import React from "react";
import { NavLink, Link } from "react-router-dom";
import '../../App.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container">
        {/* TITULO */}
      {  <Link to="/" className="navbar-brand fs-3 ubuntu ">
          Rick and  <span className="text-success">Morty</span>
        </Link>}
        <style jsx>{`
          button[aria-expanded="false"] > .close {
            display: none;
          }
          button[aria-expanded="true"] > .open {
            display: none;
          }
        `}</style>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="fas fa-bars open text-success"></span>
          <span class="fas fa-times close text-success"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav fs-5">
            <NavLink to="/" className="nav-link text-success ">
              Personajes
            </NavLink>
            <NavLink to="/episodes" className="nav-link text-success">
              Episodios
            </NavLink>
            <NavLink
              activeClassName="active"
              className="nav-link text-success"
              to="/location"
              
            >
              Localización
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
