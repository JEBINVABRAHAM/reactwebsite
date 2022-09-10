import React from 'react'
import { useState } from "react";
import logo from "../images/logo1.png";
import prof from "../images/chef.jpg";

import end from "../images/end.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


export default function Siderbar() {

    const location = useLocation();
  return (
    <div className="side-wrap">
    <div className="logo">
      <img src={logo} height="55px" />
    </div>

    <div className="prof-circ">
      <div className="inside-circ">
        <img alt="" className="img-profile rounded-circle" src={prof} />
      </div>
      <div className="prof-name">
        <label>Kristin Watson</label>
        <br></br>
        <div className="sub-name">
          <label>Chef de Partie</label>
        </div>
      </div>
      <div className="count">
        <i className="fas fa-gift fa-sm fa-fw  ml-5 "></i>
        <label>
          <strong>37</strong>
        </label>
      </div>
      <div className="side-menu mt-5">
        <ul className="navbar-nav ml-auto ">
          <li className={`nav-item ${
                  location.pathname ==="/" ? "active" : ""
                }`}>
            <Link className="nav-link " to="/">
              <i className="fas fa-book-open fa-sm fa-fw mr-2 "></i>
              Recipes
            </Link>
          </li>
          <li className={`nav-item ${
                  location.pathname.startsWith("/favorites") ? "active" : ""
                }`}>
            <Link className="nav-link " to="/favorites">
              <i className="fas fa-heart fa-sm fa-fw mr-2 "></i>
              Favorites
            </Link>
          </li>
          <li className={`nav-item ${
                  location.pathname.startsWith("/course") ? "active" : ""
                }`}>
            <Link className="nav-link " to="/course">
              <i className="fas fa-layer-group fa-sm fa-fw mr-2 "></i>
              Course
            </Link>
          </li>
          <li className={`nav-item ${
                  location.pathname.startsWith("/community") ? "active" : ""
                }`}>
            <Link className="nav-link " to="/community">
              <i className="fas fa-globe fa-sm fa-fw mr-2 "></i>
              Community
            </Link>
          </li>
        </ul>

        <div className="mt-5 side-end">
          <img src={end} height="140px" />
        </div>
      </div>
    </div>
  </div>
  )
}
