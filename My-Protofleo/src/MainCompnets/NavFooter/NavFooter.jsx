import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import  "./NavFooter.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faInfo, faPager, faLayerGroup, faPhone } from '@fortawesome/free-solid-svg-icons';

const NavFooter = () => {
  const location = useLocation();

  const handleNavCollapse = () => {
    setIsNavCollapsed(prevState => !prevState);
  };

  return (
    <nav className="navfooterEd">
     


     <Link className={`nav-link ${location.pathname === "/Skill" ? "active" : ""}`} to="/Skill">
                <span className="alliss">
                <i className="fa-solid fa-layer-group"></i> <span className="icorys">Skills</span>
                </span>
              </Link>
         
   
       
              <Link className={`nav-link ${location.pathname === "/Projects" ? "active" : ""}`} to="/Projects" >
                <span className="alliss">
                <i className="fa-solid fa-pager"></i> <span className="icorys">Projects</span>
                </span>
              </Link>

              <Link className={`nav-link  ${location.pathname === "/" ? "active" : ""}`} to="/" >
                <span className="alliss">
                <i className="fa-solid  fa-house"></i> <span className="icorys">Home</span>
                </span>
              </Link>

              <Link className={`nav-link ${location.pathname === "/About" ? "active" : ""}`} to="/About">
                <span className="alliss">
                <i className="fa-solid fa-info"></i> <span className="icorys">About</span>
                </span>
              </Link>


              <Link className={`nav-link ${location.pathname === "/ContactMe" ? "active" : ""}`} to="/ContactMe" >
                <span className="alliss">
                <i className="fa-solid fa-phone"></i> <span className="icorys">Contact</span>
                </span>
              </Link>
         
          
          
       
           

  
             
      
 
       


    </nav>
  );
};

export default NavFooter;
