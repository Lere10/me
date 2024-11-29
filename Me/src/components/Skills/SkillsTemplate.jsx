import React from "react";
import "../../blocks/skills.css";

export default function SkillsTemplate({ props }) {
  return (
    <li className="skills__topic">
      <img
        src={props.icon ? props.icon : ""}
        alt={props.title ? props.title : "erro de imagem"}
        className="skills__topic-img"
      />
      <p className="skills__topic-name">
        {props.title ? props.title.toUpperCase() : ""}
      </p>
    </li>
  );
}
