import React from 'react'
import { Link } from 'react-router-dom'
import style from "./NavFooter.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faInfo, faPager, faLayerGroup, faPhone, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
export default function NavFooter() {
  return (
    <nav className={style.navfooterEd}>




<Link  className={style.linkIcoFot} to="/ContactMe" >
<span className={style.alliof}>
 <FontAwesomeIcon icon={faPhone} /> <span className={style.icoryf}>Contact</span>
 </span>
</Link>

<Link  className={style.linkIcoFot}  to="/Projects" >
                <span className={style.alliof} id="pro">
                  <FontAwesomeIcon icon={faPager} /> <span className={style.icoryf}>Projects</span>
                </span>
              </Link>


              <Link className={style.linkIcoFot}  to="/" >
                <span className={style.alliof} id="homey">
                  <FontAwesomeIcon icon={faHouse} /> <span className={style.icoryf}>Home</span>
                </span>
              </Link>


              <Link className={style.linkIcoFot} to="/Skill" >
                <span className={style.alliof} id="sk">
                  <FontAwesomeIcon icon={faLayerGroup} /> <span className={style.icoryf}>Skills</span>
                </span>
              </Link>



              <Link className={style.linkIcoFot}  to="/About" >
                <span className={style.alliof} id="abbout">
                  <FontAwesomeIcon icon={faInfo} /> <span className={style.icoryf}>About</span>
                </span>
              </Link>
    </nav>
  )
}
