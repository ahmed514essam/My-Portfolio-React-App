import React, { useEffect } from 'react';
import "./HomePage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF , faWhatsapp , faLinkedinIn , faGithub } from '@fortawesome/free-brands-svg-icons';
import {  useLocation } from 'react-router-dom';

export default function HomePage() {

  const ActivePath = () => {
    const location = useLocation();
    console.log( location.pathname);
  };
function onn() {
  ActivePath()
}
  return (
    <main>
      <div className="mainHome">
        <h1 onClick={onn()} className="honeforMainBage">Ahmed Essam</h1>
        <p className='paraJops'>Frontend Web Developer</p>
        <div className="socialMediaIco">

        <span className="span">
        <a className="aaaSocial fa" href="https://www.facebook.com/ahmed.egyptian.9889/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
</span>
<span className="span">
<a href="https://api.whatsapp.com/send?phone=+201094461846&text=Hi" target="_blank" className='aaaSocial wh'><FontAwesomeIcon icon={faWhatsapp} /></a>
</span>
<span className="span">
<a href="https://www.linkedin.com/in/ahmed-essam-618055230/" target="_blank" className="aaaSocial li"><FontAwesomeIcon icon={faLinkedinIn} /></a>
</span>
<span className="span">
<a href="https://github.com/ahmed514essam" target="_blank" className="aaaSocial gi"><FontAwesomeIcon icon={faGithub} /></a>
</span>
        </div>
   

        <section className="home-btns">
                            <a rel="noreferrer" target="_self" href="https://drive.google.com/u/0/uc?id=1uCgR6ZYGdkmEyA4AwWVI4C1d-8VRsTY4&export=download" download>Download My Resume</a>
                        </section>


      </div>
    </main>
  );
}
