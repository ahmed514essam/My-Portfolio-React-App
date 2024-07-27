import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import "./NavFooter.css";
import style from "./NavFooter.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faInfo, faPager, faLayerGroup, faPhone } from '@fortawesome/free-solid-svg-icons';

const NavFooter = () => {
  const location = useLocation();

  return (
    <nav className={style.navfooterEd}>
      <Link className={`${style.linkIcoFot} ${location.pathname === "/ContactMe" ? style.active : ""}`} to="/ContactMe">
        <span className={style.alliof} id="ad">
          <FontAwesomeIcon icon={faPhone} /> <span className={style.icoryf} id="nameIcony">Contact</span>
        </span>
      </Link>

      <Link className={`${style.linkIcoFot} ${location.pathname === "/Projects" ? style.active : ""}`} to="/Projects">
        <span className={style.alliof} id="ad">
          <FontAwesomeIcon icon={faPager} /> <span className={style.icoryf} id="nameIcony">Projects</span>
        </span>
      </Link>

      <Link className={`${style.linkIcoFot} ${location.pathname === "/" ? style.active : ""}`} to="/">
        <span className={style.alliof} id="ad">
          <FontAwesomeIcon icon={faHouse} /> <span className={style.icoryf} id="nameIcony">Home</span>
        </span>
      </Link>

      <Link className={`${style.linkIcoFot} ${location.pathname === "/Skill" ? style.active : ""}`} to="/Skill">
        <span className={style.alliof} id="ad">
          <FontAwesomeIcon icon={faLayerGroup} /> <span className={style.icoryf} id="nameIcony">Skills</span>
        </span>
      </Link>

      <Link className={`${style.linkIcoFot} ${location.pathname === "/About" ? style.active : ""}`} to="/About">
        <span className={style.alliof} id="ad">
          <FontAwesomeIcon icon={faInfo} /> <span className={style.icoryf} id="nameIcony">About</span>
        </span>
      </Link>
    </nav>
  );
};

export default NavFooter;
