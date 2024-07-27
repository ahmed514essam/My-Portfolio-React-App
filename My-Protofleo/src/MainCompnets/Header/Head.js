import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import "./Header.css";

const ActivePath = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  return (
    <nav>
      <Link className={`nav-link ${activePath === "/" ? "active" : ""}`} to="/">
        <span className="allis">
          <i className="fa-solid fa-house"></i> <span className="icory">Home</span>
        </span>
      </Link>
      <Link className={`nav-link ${activePath === "/About" ? "active" : ""}`} to="/About">
        <span className="allis">
          <i className="fa-solid fa-info"></i> <span className="icory">About</span>
        </span>
      </Link>
      <Link className={`nav-link ${activePath === "/Projects" ? "active" : ""}`} to="/Projects">
        <span className="allis">
          <i className="fa-solid fa-pager"></i> <span className="icory">Projects</span>
        </span>
      </Link>
      <Link className={`nav-link ${activePath === "/Skill" ? "active" : ""}`} to="/Skill">
        <span className="allis">
          <i className="fa-solid fa-layer-group"></i> <span className="icory">Skills</span>
        </span>
      </Link>
      <Link className={`nav-link ${activePath === "/ContactMe" ? "active" : ""}`} to="/ContactMe">
        <span className="allis">
          <i className="fa-solid fa-phone"></i> <span className="icory">Contact</span>
        </span>
      </Link>
    </nav>
  );
};

export default ActivePath;
