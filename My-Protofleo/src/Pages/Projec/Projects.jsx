import React, { useState } from 'react'
import styles from "./Projects.module.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Projects() {

  const [projects] = useState([
 
    {
      num:"1" ,
        name: "Muslim Quran" ,
        des:"The Holy Qur’an website contains supplications, radio, and Islamic excerpts, and you can create an account on it based on react js.",
        imge: "../../../public/projPhoto/quran.png",
        demo: "https://quran-git-main-ahmed-essams-projects-be842e8b.vercel.app/",
        repo: "https://github.com/ahmed514essam/Quran.git"
    },
    {
      num:"2" ,
        name: "Weki Search" ,
        des:"A site to search for anything on the original Wikipedia site by typing it, even if it is an ace, and there is a page for favorites.",
        imge: "../../../public/projPhoto/wekiSearch.png" ,
        demo: "https://wekipdia-search-engine.vercel.app/",
        repo: "https://github.com/ahmed514essam/Wekipdia-search-engine.git"
    },
    {
      num:"3" ,
      des:"A site that sells pets, including cats and dogs, their comfort products, and their food",
        name: "Pets Store" ,
        imge:"../../../public/projPhoto/petsStore.png" ,
        demo:  "https://pets-store-umber.vercel.app/",
        repo: "https://github.com/ahmed514essam/Pets-Store.git"
    },
    {
      num:"4" ,
      des:"It is a verified form to fill out a card of type n types of practices",
        name: "Details Form" ,
        imge: "../../../public/projPhoto/detailsForm.png",
        demo: "https://ahmed514essam.github.io/details-form/",
        repo:"https://github.com/ahmed514essam/details-form.git"
    },
    {
      num:"5" ,
        name: "Main Form" ,
        des:"A type of practice is creating a form website for filling to enter the next page",
        imge:"../../../public/projPhoto/mainForm.png" ,
        demo:"https://ahmed514essam.github.io/MainForm.github.io/" ,
        repo: "https://github.com/ahmed514essam/MainForm.github.io.git"
    },
    {
      num:"6" ,
      des:"Dessert products that allow you to put what you like in the basket, choose the quantity, and see the total price, simply and compatible with all screens.",
        name: "Product Cart" ,
        imge: "../../../public/projPhoto/cartSimple.png",
        demo:"https://ahmed514essam.github.io/Product-List-with-Cart/" ,
        repo: "https://github.com/ahmed514essam/Product-List-with-Cart.git"
    },
    {
      num:"7" ,
      des:"A very simple program to calculate your age according to years, months and days",
        name: "Age Calculation" ,
        imge: "../../../public/projPhoto/ageCalc.png",
        demo: "https://ahmed514essam.github.io/Age-Calculation/",
        repo: "https://github.com/ahmed514essam/Age-Calculation.git"
    },
    {
      num:"8" ,
      des:"A simple calculator created using JavaScript only",
        name:  "Simple Calculator",
        imge: "../../../public/projPhoto/simpleCaluclator.png",
        demo:"https://ahmed514essam.github.io/Simble-Calculator/" ,
        repo: "https://github.com/ahmed514essam/Simble-Calculator.git"
    },
    
    
    
          ]);

let totalProj = projects.length ;


  return (
    <section className={styles.secOnContact}>

    <h1>Projects</h1>
    
    
    <div className={styles.content}>

{projects.map((project , index) => (

<div className={styles.proj} key={index}>



<div className={styles.imgProjects}>
<span>{project.num}</span>/<span>{totalProj}</span>

<img src={project.imge}  alt={project.name}/>
</div>

<div className={styles.ppara}>
<h2>{project.name}</h2>
<p>{project.des}</p>
</div>



<div>
<button><Link to={project.demo}>Demo</Link></button>

<Link to={project.repo}><FontAwesomeIcon icon={faGithub} /></Link>

</div>

</div>

))}




    </div>
    
    
        </section>
  )
}
