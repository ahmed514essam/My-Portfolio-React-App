import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faInfo, faPager, faLayerGroup, faPhone, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const location = useLocation();

  const handleNavCollapse = () => {
    setIsNavCollapsed(prevState => !prevState);
  };

  const closeMenu = () => {
    setIsNavCollapsed(true);
  };

  return (
    <nav className="mainBG navbar navbar-expand-lg bg-p">
      <div className="container-fluid">
        <Link className="heads" to="/" onClick={closeMenu}>
          <span className='spanHead'>M</span>y <span className='spanHead'>P</span>rotoflio
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <FontAwesomeIcon icon={isNavCollapsed ? faBars : faTimes} className='menuColsTog'/>
        </button>

        <div className={`collapse navbar-collapse ${isNavCollapsed ? '' : 'show'}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ">
              <Link className={`nav-link  ${location.pathname === "/" ? "active" : ""}`} to="/" onClick={closeMenu}>
                <span className="allis">
                <i className="fa-solid  fa-house"></i> <span className="icory">Home</span>
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/About" ? "active" : ""}`} to="/About" onClick={closeMenu}>
                <span className="allis">
                <i className="fa-solid fa-info"></i> <span className="icory">About</span>
                </span>
              </Link>
            </li>
            <li className="nav-item ">
              <Link className={`nav-link ${location.pathname === "/Projects" ? "active" : ""}`} to="/Projects" onClick={closeMenu}>
                <span className="allis">
                <i className="fa-solid fa-pager"></i> <span className="icory">Projects</span>
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/Skill" ? "active" : ""}`} to="/Skill" onClick={closeMenu}>
                <span className="allis">
                <i className="fa-solid fa-layer-group"></i> <span className="icory">Skills</span>
                </span>
              </Link>
            </li>
            <li className="nav-item ">
              <Link className={`nav-link ${location.pathname === "/ContactMe" ? "active" : ""}`} to="/ContactMe" onClick={closeMenu}>
                <span className="allis">
                <i className="fa-solid fa-phone"></i> <span className="icory">Contact</span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
