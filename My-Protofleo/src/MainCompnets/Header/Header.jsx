import React, { useState } from "react";
import { Outlet, NavLink, useNavigate, Link } from "react-router-dom";
import "./Header.css";

export default function HomePage() {
const navicate = useNavigate();

function StillOnHome() {
navicate("/")
}


  return (
    <>
      {/* <nav className="mainBG navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <h3 onClick={StillOnHome()} className="navbar-brand" to="/"></h3>
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
            <ul className="navbar-nav ms-auto mx-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="#">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#">
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    

<nav className="mainBG navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <h3 className="navbar-brand" onClick={StillOnHome()}><span className="spanHead">M</span>y <span className="spanHead">P</span>ortfolio</h3>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className=" navbar-nav ms-auto">
       
        <li className="nav-item">
          <Link className="likss nav-link" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="likss nav-link" href="#">About</Link>
        </li>
        <li className="nav-item">
          <Link className="likss nav-link" href="#">Projects</Link>
        </li>
        <li className="nav-item">
          <Link className="likss nav-link" href="#">Skills</Link>
        </li>
        <li className="nav-item">
          <Link className="likss nav-link" href="#">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
  );
}
