import React from "react";
import "../../blocks/header.css";
import NavBar from "./NavBar/NavBar.jsx";
import headerImg from "../../images/header__image.png";

export default function Header() {
  return (
    <header className="header">
      <NavBar />
      <p className="header__pretitle">hello world</p>
      <h1 className="header__title">Desenvolvedor front-end & Web designer</h1>
      <p className="header__subtitle">
        Olá, me chamo Lucas Ierê, sou de Fortaleza no Ceará, formado em Sistemas
        e Mídias Digitais pela UFC, e apaixonado por aplicações web, desde suas
        concepções no design até o desenvolvimento em código. Fã de animes e
        mangás, entusiasta de geografia e faço roteiros de viagens nas horas
        vagas.
      </p>
      <button className="header__button">Baixe meu currículo</button>
      <img className="header__image" alt="Foto de Lucas Iere" src={headerImg} />
    </header>
  );
}
