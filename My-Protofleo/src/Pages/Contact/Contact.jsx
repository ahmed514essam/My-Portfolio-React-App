import React, { useState } from 'react'
import style from "./Contact.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF , faWhatsapp , faLinkedinIn , faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {



  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "88b30d4b-08dd-4867-9c85-b279e94bfa82");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <>
   <section className={style.secContact}>
    
<div className={style.definMe}>

<div className={style.hh}>
  <h1>Contact Me</h1>
  <p>
  Name: Ahmed Essam ElSayed

  Meet Ghamr, Ad Daqahliyah, Egypt

  Phone: +20 109 446 1846

Gmail: ahmedessaam124@gmail.com
  </p>
</div>

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

</div>


<div className={style.Conn}>
  <h2>
  Use a valid email address, So I can reply back.
  </h2>
<form onSubmit={onSubmit}>
<input type="text" id="name" name="name"  placeholder="Your Name" className="field" required/>

<input type="text" id="email" name="email"  placeholder="Your Email" className="field"  required/>

<textarea  name="message" id=""   placeholder="Message" className="field mess"  required/>

<button type="submit">Send</button>
</form>
</div>





   </section>




   </>
  )
}
