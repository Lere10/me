import React from "react";
import "../../blocks/header.css";
import NavBar from "./NavBar/NavBar.jsx";
import headerImg from "../../images/header__image.png";

export default function Header() {
  const pretitle = "<hello world/>";

  return (
    <header className="header">
      <NavBar />
      <section id="about" className="header__content">
        <div className="header__content-text">
          <p className="header__pretitle">{pretitle}</p>
          <h1 className="header__title">Web Developer & Designer</h1>
          <p className="header__subtitle">
            Olá, me chamo Lucas Ierê, sou de Fortaleza no Ceará, formado em
            Sistemas e Mídias Digitais pela UFC, e apaixonado por aplicações
            web, desde suas concepções no design até o desenvolvimento em
            código. Fã de animes e mangás, entusiasta de geografia e faço
            roteiros de viagens nas horas vagas.
          </p>
          <button
            className="header__button"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1I8WMA2XKgRWWER8r4bjfA_mMxVYt97xq/view?usp=sharing",
                "_blank"
              )
            }
          >
            Baixe meu currículo
          </button>
        </div>
        <img
          className="header__image"
          alt="Foto de Lucas Iere"
          src={headerImg}
        />
      </section>
    </header>
  );
}
