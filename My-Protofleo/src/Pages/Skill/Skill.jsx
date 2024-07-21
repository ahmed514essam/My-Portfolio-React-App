import React, { useState } from 'react';
import styles from "./Skill.module.css";

export default function Skill() {
  const [skills] = useState([
    { name: "HTML5", img: "../../../public/imges/html.png" },
    { name: "CSS3", img: "../../../public/imges/css.png" },
    { name: "JavaScript", img:"../../../public/imges/js.png" },
    { name: "JSON", img: "../../../public/imges/json.png" },
    { name: "Bootstrap", img: "../../../public/imges/bootstrap.png"},
    { name: "React", img: "../../../public/imges/react.png" },
    { name: "Redux", img: "../../../public/imges/redux.png" },
    { name: "npm", img: "../../../public/imges/npm.png" },
    { name: "Vite", img: "../../../public/imges/vite.png" },
    { name: "Figma", img: "../../../public/imges/figma.png" }
  ]);

  return (
    <section className={styles.secSkills}>
      <h1>My Skills</h1>
      <div className={styles.content}>
        {skills.map((skill, index) => (
          <div className={styles.skilly} key={index}>
            <div className={styles.imgSkills}>
              <img src={`/images/${skill.img}`} alt={skill.name} />
            </div>
            <h4>{skill.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
