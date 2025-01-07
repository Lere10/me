import React from "react";
import "../../blocks/skills.css";
import skillsImg from "../../images/skills_img.png";
import SkillsTemplate from "./SkillsTemplate.jsx";
import htmlIcon from "../../images/skills__html.png";
import cssIcon from "../../images/skills__css.png";
import jsIcon from "../../images/skills__js.png";
import reactIcon from "../../images/skills__react.png";
import figmaIcon from "../../images/skills__figma.png";
import gitIcon from "../../images/skills__git.png";

export default function Skills() {
  const skillsPretitle = "<skills/>";
  const skills = [
    {
      title: "HTML",
      icon: htmlIcon,
    },
    {
      title: "CSS",
      icon: cssIcon,
    },
    {
      title: "Javascript",
      icon: jsIcon,
    },
    {
      title: "react",
      icon: reactIcon,
    },
    {
      title: "git",
      icon: gitIcon,
    },
    {
      title: "figma",
      icon: figmaIcon,
    },
  ];
  return (
    <section className="skills" id="skills">
      <div className="skills__content">
        <img
          src={skillsImg}
          alt="Foto de área de trabalho"
          className="skills__img"
        />
        <div className="skills__content-text">
          <div className="skills__header">
            <p className="skills__pretitle">{skillsPretitle}</p>
            <h3 className="skills__title">Ferramentas</h3>
          </div>
          <ul className="skills__grid">
            {skills.map((skill, index) => {
              return <SkillsTemplate key={index} props={skill} />;
            })}
          </ul>
          <div className="skills__others">
            <h4 className="skills__others-title">Outras habilidades úteis:</h4>
            <p className="skills__others-subtitle">
              Inglês avançado, Espanhol intermediário, Hooks, Node, Express,
              Mongodb, Postman, Pacote Adobe, Design Thinking, Lean UX.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
